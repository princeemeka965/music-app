import { createSlice } from "@reduxjs/toolkit";

interface TrackData {
  album: {};
  title: string;
  contributors: {}[];
  preview: string;
}

const initialState = {
  artiste: {},
  tracks: [],
  track: {} as TrackData,
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
    },
  },
});

export const { SET_ARTISTE_DATA, SET_ARTISTE_TRACKS, SET_PLAY_TRACK } =
  artisteDataSlice.actions;

export default artisteDataSlice.reducer;
