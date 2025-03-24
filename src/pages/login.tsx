import Header from "@/Component/header";
import { Router, useRouter } from "next/router";
import React, {useState} from "react"

export const DEFAULT_USERS: User[] = [
    {id: 1, username: "test", password: "123"}
];

localStorage.setItem("users", JSON.stringify(DEFAULT_USERS));

export type User = {
    id: number;
    username: String;
    password: String;
}
interface Login{
    user: User | null;
    users: User[];
    isLoggedIn: boolean;
}

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
  
    const checkValid = (e: React.FormEvent): boolean => {
        if(DEFAULT_USERS.find(e => e.username == username && e.password == password)){
            return true;
        }
        else{
            return false;
        }
    }
    
    return(
        <>
        <Header></Header>
        <div>
            <form className="input-container" onSubmit={checkValid}>
            <header className="formTitle">LOGIN</header>
            <input className="inputBox" type="username" placeholder="Username" required onChange={(e) => setUsername(e.target.value)}></input>
            <input className="inputBox" type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit">Submit</button>
            </form>
        </div>
        </>
    );
}