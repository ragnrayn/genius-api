import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const HomeApiSlice = createApi({
  reducerPath: "geniusBasic",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.genius.com/" }),
  endpoints: builder => ({
    getArtist: builder.query<any, void>({
        query: () => ({
            method: "GET",
            url: "account",
            headers: {
                "Authorization": "Bearer uEPNys2K0dxOY3Rx52mEkarCImQSD2du6AbgRv3n73OyRB6LS0kL2UNWIBcXZj4E",
            },
            mode: "no-cors",
        })
    })
  }),
})

export const { useGetArtistQuery } = HomeApiSlice;