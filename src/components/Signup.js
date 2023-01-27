import React, { useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom'


function Signup() {

  const [username,setUser] = useState('')  
  const [password,setPassword] = useState('') 
  const history= useNavigate() 

  async function submit(e) {
    e.preventDefault();

    try {

        await axios.post("http://localhost:8000/signup", {
            username,password
        })

        .then(res => {  
            if(res.datos==="exist") {
                alert("Usuario ya existe")
               // history("/home",{state:{id:username}})
            } 
            
            else if(res.datos==="notexist") {
                history("/home",{state:{id:username}})
            } 
        })
        
        .catch(e => {
            alert("Detalles errados")
            console.log(e);
        })
        
    } 
    
    catch (e) 
    {
        console.log(e)    
    }
  }
  
  return (
    <div className='signup'>
        <h1>Registrarse</h1>
        <form action = "POST">
            <input type="text" onChange={(e)=> {setUser(e.target.value)}} placeholder="Nombre Usuario" id="usr"></input>
            <input type="password" onChange={(e)=> {setPassword(e.target.value)}} placeholder="Password" id="pass"></input>
            <input type ="submit" onClick={submit}/>
        </form>

        
        <p>O</p>
        

        <Link to="/">Iniciar Sesion</Link>
    </div>
  )
}

export default Signup