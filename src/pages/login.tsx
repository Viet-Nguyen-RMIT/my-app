import React, {useState} from "react"
import { useAuth } from "./Context/userContext";
import { useRouter } from "next/router";


export default function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        
        if(login(username, password)){
            router.push("/");
        }
        else{
            alert("Incorrect username or password. Try again!");
        }
    }

    return(
        <>
        <div>
            <form className="input-container" onSubmit={handleSubmit}>
            <header className="formTitle">SIGN IN</header>
            <input className="inputBox" type="username" placeholder="Username" required onChange={(e) => setUsername(e.target.value)}></input>
            <input className="inputBox" type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit">Sign In</button>
            </form>
        </div>
        </>
    );
}