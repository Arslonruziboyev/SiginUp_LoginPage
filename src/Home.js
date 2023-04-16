import { Link } from "react-router-dom"

const Home = () =>{
    return (
        <div>
           <div className="header">
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Logout</Link>
           </div>
           <h1 className="text-center">Welcome to Arslon Ruziboev</h1>
        </div>
    )
}

export default Home