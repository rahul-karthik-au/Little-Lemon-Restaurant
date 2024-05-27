import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../App";

function Nav(){
    const useLoginContext=useContext(LoginContext);
    function logout(){
        useLoginContext.setIsLoggedIn(false)
        useLoginContext.setUserName("")
    }
    return(
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Menu</Link></li>
            <li><Link to="/booking">Reservation</Link></li>
            <li><Link to="/">Order Online</Link></li>
            <li>{ useLoginContext.isLoggedIn ?
                  <Link to='/' onClick={logout}>Log out</Link>
                  :
                  <Link to='/login'>Login</Link> }</li>
        </ul>
        </nav>
    )
}
export default Nav;