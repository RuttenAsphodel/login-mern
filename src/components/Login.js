import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom'


function Login() {

  const history= useNavigate()

  const [username,setUser] = useState('')  
  const [password,setPassword] = useState('')  

  async function submit(e) {
    e.preventDefault();

    try {

        await axios.post("http:??//localhost:8000/", 
        username,password)
        .then(res => {  
            if(res.datos="exist") {
                history("/home",{state:{id:username}})
            } 
            
            else if(res.datos="notexist") {
                alert('Usuario no esta registrado')
            } 
        })
        
        .catch(e => {
            alert("detalles errados")
            console.log(e);
        })
    } 
    
    catch (e) 
    {
        console.log(e);    
    }
  }
  
  return (
    <div className='login'>
        <h1>Login</h1>
        <form action = "POST">
            <input type="text" onChange={(e)=> {setUser(e.target.value)}} placeholder="Nombre Usuario" id="usr"></input>
            <input type="password" onChange={(e)=> {setPassword(e.target.value)}} placeholder="Password" id="pass"></input>
            <input type ="submit" onClick={submit}/>
        </form>

        
        <p>O</p>
        

        <Link to="/signup">Registrarse</Link>
    </div>
  )
}

export default Login