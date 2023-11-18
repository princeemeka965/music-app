import axios from "axios";

export const AxiosDeezer = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "d77e58d745msh315ac01c190b056p15860ajsnc32644a77641",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
});

export const AxiosDEV = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://api-music-app-3dww.onrender.com"
      : "http://127.0.0.1:5000",
});

export const AxiosBillBoard = axios.create({
  baseURL: "https://genius-song-lyrics1.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "d77e58d745msh315ac01c190b056p15860ajsnc32644a77641",
    "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
  },
});
