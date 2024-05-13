import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const HomeApiSlice = createApi({
  reducerPath: "geniusBasic",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.genius.com/" }),
  endpoints: builder => ({
    getArtist: builder.query<any, string>({
        query: (artist) => ({
            method: "GET",
            url: `search?q=${artist}&access_token=BIfgkqrwwlnDIWWUCSwwIpnJzj0ayZDBTojGoeMBj7nSDK4C3C4ZW1tVBCJ6AbNE`,
        })
    })
  }),
})

export const { useLazyGetArtistQuery } = HomeApiSlice;