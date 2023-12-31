import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artiste: {},
  tracks: [],
  track: {},
  audioPlayer: false,
};

export const artisteDataSlice = createSlice({
  name: "artisteDataSlice",
  initialState,
  reducers: {
    SET_ARTISTE_DATA: (state, action) => {
      state.artiste = action.payload;
    },

    SET_ARTISTE_TRACKS: (state, action) => {
      state.tracks = action.payload;
    },

    SET_PLAY_TRACK: (state, action) => {
      state.track = action.payload;
      state.audioPlayer = Object.keys(action.payload).length > 0 ? true : false;
    },
  },
});

export const { SET_ARTISTE_DATA, SET_ARTISTE_TRACKS, SET_PLAY_TRACK } =
  artisteDataSlice.actions;

export default artisteDataSlice.reducer;
