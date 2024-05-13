import "./Header.css";
import geniusLogo from "../../../assets/genius-logo.svg";
import searchIcon from "../../../assets/search-icon.svg";
import { useEffect, useState } from "react";
import { useLazyGetArtistQuery } from "../../../pages/Home/HomeApiSlice";


function Header(){

    const [search, setSearch] = useState('');
    const [artist, { isLoading, isError, data, error }] = useLazyGetArtistQuery();


    useEffect(() => {
       artist("Kendrik");
       console.log(data);
    }, []);

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
                            <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Enter artist name" />
                            <button onClick={() => findArtistData()} type="button">
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
