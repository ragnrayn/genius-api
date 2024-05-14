import { useEffect } from "react";
import { useLazyGetArtistQuery } from "../../../pages/Home/HomeApiSlice";
import { useSelector, useStore } from "react-redux";
import { useAppSelector } from "../../../app/hooks";

/*
TODO:
- [] - create markup for ArtistContent card with
    "header_image_url", "is_verified", "url artist", "full_title" fields
*/

function ArtistContent(){
    const [setArtist, {data, isLoading, isError}] = useLazyGetArtistQuery();
    const title = useSelector((state: any) => state.artist.artistTitle);

    return(
        <>
          Test { title }
        </>
    )
}

export default ArtistContent;