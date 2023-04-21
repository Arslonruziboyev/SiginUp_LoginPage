import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

const Doctor = () =>{
    const usenavigatee = useNavigate();
    useEffect(()=>{
        let username = sessionStorage.getItem('username');

        if(username === '' || username === null){
            usenavigatee('/login')
        }
    }, [])
    return (
        <div>
           <div className="header">
            <Link to={'/'}>doctor</Link>
            <Link to={'/login'}>Logout</Link>
           </div>
           <h1 className="text-center">Welcome to Doctor Page</h1>
        </div>
    )
}

export default Doctor