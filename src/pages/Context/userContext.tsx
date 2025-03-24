import React, {createContext, useContext, useEffect, useState} from "react";
export type User = {
    id: string;
    username: String;
    password: String;
    role: String;
}

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

    useEffect(() =>{

        const existingUsers = localStorage.getItem("Users");
        if(existingUsers){
            setUsers(JSON.parse(existingUsers));
        }
        else{
            const DEFAULT_USERS : User[] = 
            [{id: "1", username: "Lecturer", password: "123", role:"Lecturer"},
             {id: "2", username: "Tutor", password: "456", role:"Tutor"}
            ];
            localStorage.setItem("Users", JSON.stringify(DEFAULT_USERS));
            setUsers(DEFAULT_USERS);
        }

        const loggedInUser = localStorage.getItem("CurrentUser");
        if(loggedInUser){
            setUser(JSON.parse(loggedInUser));
        }
    },[]);

    const login = (username: string, password: string) : boolean =>{

        const currentUser = users.find((u) => u.username == username && u.password == password);

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