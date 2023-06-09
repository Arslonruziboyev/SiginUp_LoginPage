import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

const Home = () =>{
    const usenavigatee = useNavigate();
    useEffect(()=>{
        let username = sessionStorage.getItem('username');
        let goalEntry = sessionStorage.getItem('goalEntry');

        if((username === '' || username === null) && Response.goalEntry === goalEntry){
            usenavigatee('/login')
        }
    }, [])
    return (
        <div>
           <div className="header">
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Logout</Link>
           </div>
           <h1 className="text-center">Welcome to User Page</h1>
        </div>
    )
}

export default Home