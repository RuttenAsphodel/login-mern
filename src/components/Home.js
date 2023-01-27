import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'

function Home() {

    const location = useLocation()      
    return (
        <div className='home'>
            <h1>
                Bienvenido {location.state.id} a Soporte PJUD 
            </h1>
        </div>
    )
}

export default Home