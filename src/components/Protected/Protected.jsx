import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Protectd(){
    let navigate=useNavigate();
    React.useEffect(()=>{
        
       const token = localStorage.getItem('token');
       axios.get("https://canteen-fresh-backend-1.onrender.com/protected",{headers:{ Authorization: token}})
       .then(res=>{
        console.log(res);
       })
       .catch(err=>{
        console.log(err);
        navigate('/login');
       })
    },[])
    
    return (<>
    <h1>This data is Protected</h1>
    </>)
}