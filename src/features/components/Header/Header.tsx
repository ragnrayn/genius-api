import "./Header.css";
import geniusLogo from "../../../assets/genius-logo.svg";


function Header(){
    return(
        <>
            <div className="header">
                <div className="container">
                    <div className="header-body">
                        <div className="header-logo">
                            <a href="#">
                                <img width={'70px'} src={geniusLogo} alt="" />
                            </a>
                        </div>
                        <div className="header-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Artists</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
