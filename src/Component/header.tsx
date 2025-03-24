import Link from "next/link";
import React from "react";

export default function Header(){

    return(
        <ul className="navBar">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Contact</Link></li>
            <li className="right"><Link href="./login">Login</Link></li>
        </ul>
    );
}