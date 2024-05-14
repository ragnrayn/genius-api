import { createSlice } from "@reduxjs/toolkit";

interface StateType{
    artistTitle: string
}

const initialState: StateType = { artistTitle: "" }

export const headerSlice = createSlice({
    name: "artist",
    initialState,
    reducers: (artist) => ({
        getChars: artist.reducer((state, action: any) => {
            state.artistTitle = action.payload;
            console.log(state.artistTitle);
        })
    })
});

export const { getChars } = headerSlice.actions;


