import { create } from "domain";
import React, {createContext, useState} from "react";
export type User = {
    id: string;
    username: String;
    password: String;
}

interface UserContextType {
    currentUser: User | null;
    users: User[];
    login : (username: string, password: string) => boolean;
    Logout : () => null;
}

const userContext = createContext<UserContextType | undefined>(undefined);

export function userContextProvider ({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User>(); 
    const [users, setUsers] = useState<User[]>([]);

    const existingUsers = localStorage.getItem("Users");
    if(existingUsers){
        setUsers(JSON.parse(existingUsers));
    }
    else{
        const DEFAULT_USERS : User[] = [{id: "1", username: "Test", password: "Test123"}];
        localStorage.setItem("Users", JSON.stringify(users));
        setUsers(DEFAULT_USERS);
    }

    const login = (username: string, password: string) : Boolean =>{
        return true
    };
}