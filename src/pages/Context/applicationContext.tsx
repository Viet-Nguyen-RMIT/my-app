import React, { createContext, useEffect, useState } from "react";
import { Application } from "../Types/Application";

interface ApplicationContextType {
    applications: Application[];
    createApp : () => void;
    editApp : () => void;
    deleteApp : () => void;
    acceptApp : () => void;
    declineApp : () => void;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

export function ApplicationContextProvider ({ children }: { children: React.ReactNode }){
    const [applications, setApps] = useState<Application[]>([]);

    useEffect(() =>{
        const existingApp = localStorage.getItem("Applications");

        if(existingApp){
            setApps(JSON.parse(existingApp));
        }
    }, []);

    const createApp = (newApplication: Application) : void => {
        setApps([newApplication, ...applications]);
        localStorage.setItem("Applications", JSON.stringify(applications));
    }


}