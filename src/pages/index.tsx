import React, {useState} from "react";
import { useAuth } from "./Context/userContext";
export default function Home(){

  const {user, logout} = useAuth();

  return(
    <>
     <div>Hello {user?.role}</div>
    </>
  )
}