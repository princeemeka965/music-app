import axios from "axios";

export const AxiosDeezer = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "d77e58d745msh315ac01c190b056p15860ajsnc32644a77641",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
});

export const AxiosDEV = axios.create({
  baseURL: "http://127.0.0.1:5000",
});

export const AxiosBillBoard = axios.create({
  baseURL: "https://genius-song-lyrics1.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "d77e58d745msh315ac01c190b056p15860ajsnc32644a77641",
    "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
  },
});

export const signUp = (payload: {}): any => {
  let url: string = `/authenticate/createAccount`;
  return AxiosDEV.post(url, payload);
};

export const getArtisteSongs = (slug: string): any => {
  let url: string = `/artiste/tracks/${slug}`;
  return AxiosDEV.get(url);
};

export const getArtisteDetails = (id: string): any => {
  let url: string = `/artist/${id}`;
  return AxiosDeezer.get(url);
};

export const getBillBoardSongs = (): any => {
  const params = `time_period=month&chart_genre=all&per_page=50&page=1&text_format=plain`;

  let url: string = `/chart/songs/?${params}`;
  return AxiosBillBoard.get(url);
};
