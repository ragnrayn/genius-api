import "./Header.css";
import geniusLogo from "../../../assets/genius-logo.svg";
import searchIcon from "../../../assets/search-icon.svg";

interface Props{
    artistNameToParent: string | any
}

function Header({ artistNameToParent }: Props){
    
    const artistToParent = (data: string) => {
        artistNameToParent(data);
    }

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
                        <div className="header-search">
                            <input type="text" onChange={(e) => artistToParent(e.target.value)} placeholder="Enter artist name" />
                            <button type="button">
                                <img width={13} src={searchIcon} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
