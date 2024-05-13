import "./Home.css";
import Header from "../../features/components/Header/Header";
import { useState } from "react";
import ArtistContent from "../../features/components/ArtistContent/ArtistContent";

function Home(){

    const [artistName, setArtistName] = useState<string>("");
    
    const handleArtistFromChild = (data: string) => {
        setArtistName(data);
    }

    return(
        <>
            <Header artistNameToParent={handleArtistFromChild} />
            <ArtistContent artist={artistName} />
        </>
    )
}

export default Home;