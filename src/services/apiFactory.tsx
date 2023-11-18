import { AxiosBillBoard, AxiosDEV, AxiosDeezer } from "./apiHeaders";

export const signUp = (payload: {}): any => {
  let url: string = `/authenticate/createAccount`;
  return AxiosDEV.post(url, payload);
};

export const loginAccount = (payload: {}): any => {
  let url: string = `/authenticate/login`;
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
