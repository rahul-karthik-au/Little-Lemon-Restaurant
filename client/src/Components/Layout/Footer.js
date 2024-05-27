import Nav from "./Nav";
import logo from "/Users/rahulkarthik/Project/React-App/table_reservation/client/src/assets/littlelemon_logo.png";
function Footer(){
    return(
        <footer>
            <div>
                <img src={logo} className="logo" alt='logo' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, qui magni repellendus perferendis, veritatis harum neque illum, perspiciatis libero et ad dolore modi in est aut fugit autem porro. Veritatis!</p>
            </div>
            <div>
                <h3>Important Links</h3>
                <Nav />
            </div>
            <div>
                <h3>Contact</h3>
                <p>Address:<br />
                    123 Town Street, Chicago</p>
                <p>Phone:<br />
                    +00 123 456 789</p>
                <p>Email:<br />
                    little@lemon.com</p>
            </div>
            <div className='social'>
                <h3>Social Media</h3>
                <a href='/'>Facbook</a>
                <a href='/'>Instagram</a>
                <a href='/'>Twitter</a>
            </div>
        </footer>
    )
}
export default Footer;