import "./Home.css";
import Header from "../../features/components/Header/Header";
import { useGetArtistQuery } from "./HomeApiSlice";

function Home(){
    
    const {data, error} = useGetArtistQuery("Kendrik");

    return(
        <>
            <Header />
        </>
    )
}

export default Home;