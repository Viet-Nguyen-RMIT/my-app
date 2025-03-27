import React, { useState } from "react";
import { useAuth } from "./Context/userContext";
import { Application } from "./Types/Application";
import { create } from "domain";

export default function tutor(){

    const {user, logout} = useAuth();
    const [applications, setApps] = useState<Application[]>([]);
    const [userApp, setApp] = useState<Application>();
    const [applicationData, setData] = useState({
        id: "",
        applicantName: "",
        availability: "Part Time",
        courses: "",
        skills: "",
        credentials: "",
        date: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;

        setData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        applicationData.availability = e.target.value;
    }
    
    const createApp = (event: React.FormEvent) => {
        event.preventDefault();
        setApps([applicationData, ... applications]);
        getApp();
        console.log(applicationData.applicantName);
        console.log(applicationData.courses);
        console.log(applicationData.availability);
        
    }

    const getApp = () => {
        alert("Success");
        const userApp = applications.find((e) => e.applicantName == user?.username);
        setApp(userApp);
    }

    return (<>
    <div className="container">
        <div className="form-container">
            <h1>Application Form</h1>
            <form className="form-box" onSubmit={createApp}>
                <label>Name <br></br>
                    <input type="text" name={"applicantName"} onChange={handleInputChange}></input>
                </label>
                <label>Course To Apply<br></br>
                    <input type="text" name="courses" onChange={handleInputChange}></input>
                </label>
                <label>Role<br></br>
                    <input type="text" name="courses" onChange={handleInputChange}></input>
                </label>
                <label>Availability<br></br>
                    <select id="availability" name="availability" onChange={handleSelectChange}>
                        <option value="Part Time" selected>Part Time</option>
                        <option value="Full Time">Full Time</option>
                        </select>
                </label>
                <label>Skills<br></br>
                    <input type="text" name="skills" onChange={handleInputChange}></input>
                </label>
                <label>Academic Credentials<br></br>
                    <input type="text" name="credentials" onChange={handleInputChange}></input>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div className="post-container">
            <h1>Recent Post</h1>
            {userApp ? <>
            <div>{userApp.applicantName}</div>
            <div>{userApp.courses}</div>
            <div>{userApp.availability}</div>
            </>:<>
            <div>No App</div>
            </>}
        </div>


    </div>
    
    
    
    
    </>);

}