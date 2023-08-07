import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
const Login =()=>{
    const[email,setEmail]=React.useState();
    const[password,setpassword]=React.useState();
    const navigate=useNavigate();
    
    useEffect(()=>{
        const auth= localStorage.getItem('user');
        if(auth)
        {
         navigate('/')
        }
       })
      
          
    const handleLogin=  async ()=>{
        console.log( "email,passsword",email,password)
        let result= await fetch('http://localhost:3001/login',{
        method:'post',
        body : JSON.stringify({email,password}),
        headers:{
            "Content-Type":"application/json"
        }
        });
        result=await result.json()
    console.warn(result);
    if(result.name){

        localStorage.setItem("user",JSON.stringify(result));
        navigate("/");
    }
    else{
        alert("please enter connect details")

    }
    
    }

    

    return(
        <div className="login">
            <h1 >Login</h1>
            
           
            <input className="inputBox" type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email"/><br/>
            
            <input className="inputBox" type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}  placeholder="Enter Password"/><br/>
            
            <button  className="appbutton"  onClick={handleLogin} type="Button"> Login</button>
        </div>
    )
}
export default Login