import {LOGO_URL} from "../utils/images/logo.jpg";
import {Link} from "react-router-dom";

const Header=()=>{
    return(
        <div className="header border">
            <div className="logo-container">
                <img 
                    className="logo"
                    src={LOGO_URL}
                    alt="image"
                />
            </div>
            <div className="nav-items">
                <p><Link to="/">Home</Link></p>
                <p><Link to="/about">About Us</Link></p>
                <button className="btn">Sign Up</button>
                <button className="btn">Sign In</button>
                <button className="btn">Log Out</button>
            </div>
            
        </div>
    );
};

export default Header;