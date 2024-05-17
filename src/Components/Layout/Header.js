import logo from "./littlelemon_logo.png";
import Nav from "./Nav";


function Header(){
    return(
        <header>
        <img src={logo} className="logo" alt='logo'/>
        <Nav />
        </header>
    )
}

export default Header;