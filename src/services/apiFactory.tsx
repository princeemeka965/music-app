import axios from "axios";

export const AxiosDeezer = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "d77e58d745msh315ac01c190b056p15860ajsnc32644a77641",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
});

export const AxiosDEV = axios.create({
  baseURL: "http://127.0.0.1:7000",
});

export const getArtisteSongs = (slug: string): any => {
  let url: string = `/artiste/tracks/${slug}`;

  return AxiosDEV.get(url);
};

export const getArtisteDetails = (id: string): any => {
  let url: string = `/artist/${id}`;

  return AxiosDeezer.get(url);
};
