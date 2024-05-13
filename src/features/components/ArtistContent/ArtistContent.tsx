import { useEffect } from "react";
import { useLazyGetArtistQuery } from "../../../pages/Home/HomeApiSlice";

/*
TODO:
- [] - create markup for ArtistContent card with
    "header_image_url", "is_verified", "url artist", "full_title" fields
*/

interface Props{
    artist: string
}

function ArtistContent({ artist }: Props){

    const [setArtist, {data, isLoading, isError}] = useLazyGetArtistQuery();


    useEffect(() => {
        setArtist(artist);
        console.log("data", data);
    }, [artist]);

    return(
        <>
            {artist}
        </>
    )
}

export default ArtistContent;