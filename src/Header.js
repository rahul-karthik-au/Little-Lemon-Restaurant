import logo from "./littlelemon_logo.png";
import Nav from "./Nav";

function Header(){
    return(
        <>
        <img src={logo} className="logo" alt='logo'/>
        <Nav />
        </>
    )
}

export default Header;