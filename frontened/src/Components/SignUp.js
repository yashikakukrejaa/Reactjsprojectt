import React,{useState,useEffect} from "react";
import{useNavigate}from 'react-router-dom';

const  SignUp =() =>{

    const[name,setName]=useState("");
    const [email,setEmail]=useState("");
   const [password,setpassword]=useState("")
   
   const navigate=useNavigate();
  useEffect(()=>{
    const auth= localStorage.getItem('user');
    if(auth)
    {
     navigate('/')
    }
   })
  
  
   const collectdata=async ()=>{
    console.log(name,email,password);
    let result= await fetch('http://localhost:3001/register',{
        method:'post',
        body : JSON.stringify({name,email,password}),
        headers:{
            "Content-Type":"application/json"
        },
    });
     result=await result.json()
    console.warn(result);
    localStorage.setItem("user",JSON.stringify(result));
    navigate('/');
 }

return(
        <div className="Register">
            <h1 >Register</h1>
            <input className="inputBox" type="text" value={name}  onChange={(e)=>setName(e.target.value)}  placeholder="Enter Name"/><br/>
           
            <input className="inputBox" type="text" value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/><br/>
            
            <input className="inputBox" type="password" value={password}  onChange={(e)=>setpassword(e.target.value)} placeholder="Enter Password"/><br/>
            
            <button onClick={collectdata} className="appbutton"type="Button"> SignUp</button>
        </div>
    )
};
export default SignUp;