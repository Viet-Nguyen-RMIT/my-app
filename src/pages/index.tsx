import React, {useState} from "react";
import Header from "@/Component/header";
import { useAuth } from "./Context/userContext";
export default function Home(){

  const {user, logout} = useAuth();
    
  const username = user?.username;

  return(
    <>
     <div>Hello {username}</div>
    </>
  );
}