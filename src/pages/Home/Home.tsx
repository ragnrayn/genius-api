import "./Home.css";
import Header from "../../features/components/Header/Header";
import { useGetArtistQuery } from "./HomeApiSlice";
import { useEffect } from "react";

function Home(){

    const data = useGetArtistQuery();


    useEffect(() => {
        console.log("Data", data);
    }, [data])

    return(
        <>
            <Header />
        </>
    )
}

export default Home;