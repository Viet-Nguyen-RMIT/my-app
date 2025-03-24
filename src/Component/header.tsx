import { useAuth } from "@/pages/Context/userContext";
import Link from "next/link";
import React from "react";

export default function Header(){

    const {user, logout} = useAuth();

    return(
        <ul className="navBar">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Contact</Link></li>
            {user ? <>
                <li className="right"><button onClick={logout}>Logout</button></li>
                <div className="right-greet">Hello, {user.username}!</div>
                </>
                :
                <li className="right"><Link href="./login">Login</Link></li>
            }
        </ul>
    );
}