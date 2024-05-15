import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const HomeApiSlice = createApi({
  reducerPath: "geniusBasic",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.genius.com/" }),
  endpoints: builder => ({
    getArtist: builder.query<any, string>({
        query: (artist) => ({
            method: "GET",
            url: `search?q=${artist}&access_token=${import.meta.env.VITE_GENIUS_TOKEN}`,
        })
    })
  }),
})

export const { useLazyGetArtistQuery } = HomeApiSlice;