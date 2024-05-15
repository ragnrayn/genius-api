import { useLazyGetArtistQuery } from "../../../pages/Home/HomeApiSlice"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import "./ArtistContent.css"
/*
    TODO:
        fix verify icon, add some features
*/

function ArtistContent() {
  const [setArtist, { data, isLoading, isError }] = useLazyGetArtistQuery()
  const title = useSelector((state: any) => state.artist.artistTitle)

  useEffect(() => {
    setArtist(title)
    console.log("Data artist", data)
  }, [title])

  return (
    <>
      <div className="artist-wrapper">
        {data && data.response.hits.length > 0
          ? data.response.hits.map((item: any) => (
              <div className="artist-item">
                <div className="artist-image">
                  <img src={item.result.header_image_url} alt="" />
                  <div className="artist-verify">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="artist-name">
                  <a target="_blank" href={item.result.url}>
                    {item.result.artist_names}
                  </a>
                </div>
              </div>
            ))
          : "Enter rigth name of artist"
        }
      </div>
    </>
  )
}

export default ArtistContent
