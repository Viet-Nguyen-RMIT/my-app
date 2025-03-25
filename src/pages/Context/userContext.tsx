import React, {createContext, useContext, useEffect, useState} from "react";
import { DEFAULT_USERS, User, } from "../Types/User";
import { Router, useRouter } from "next/router";

interface UserContextType {
    user: User | null;
    users: User[];
    login : (username: string, password: string) => boolean;
    logout : () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserContextProvider ({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null); 
    const [users, setUsers] = useState<User[]>([]);
    const router = useRouter();

    useEffect(() =>{

        const existingUsers = localStorage.getItem("Users");
        if(existingUsers){
            setUsers(JSON.parse(existingUsers));
        }
        else{
            localStorage.setItem("Users", JSON.stringify(DEFAULT_USERS));
            setUsers(DEFAULT_USERS);
        }

        const loggedInUser = localStorage.getItem("CurrentUser");
        if(loggedInUser){
            setUser(JSON.parse(loggedInUser));
        }
    },[]);

    const login = (username: string, password: string) : boolean =>{
        
        const currentUser = users.find((u) => u.username == username.trim().toLowerCase() && u.password == password.trim());

        if(currentUser){
            localStorage.setItem("CurrentUser", JSON.stringify(currentUser));
            setUser(currentUser);
            return true;
        }

        return false;
    };
    const logout = (): void => {
        setUser(null);
        localStorage.removeItem("CurrentUser");
        router.push("/login");
    };


    return(
        <UserContext.Provider value={{ user, users, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}


export function useAuth(){
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    
    }
    return context;
}