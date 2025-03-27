import React, {useState} from "react"
import { useAuth } from "./Context/userContext";
import { useRouter } from "next/router";


export default function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const router = useRouter();
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        if(login(username, password)){
            alert("Success");
            router.push("/");
        }
        else{
            setError("Wrong");
            setUsername("");
            setPassword("");
        }
    }

    return(
        <>
        <div>
            <form className="input-container" onSubmit={handleSubmit}>
            <header className="formTitle">SIGN IN</header>
            {error && 
            <>
            <div className="errorMessage">{error}</div>
            </>
            }
            <input className="inputBox" type="username" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} value={username}></input>
            <input className="inputBox" type="password" placeholder="Password" value={password} 
            required onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit">Sign In</button>
            </form>
        </div>
        </>
    )
}