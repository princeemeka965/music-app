import axios from "axios";

export const AxiosDeezer = axios.create({
  baseURL: "https://api.deezer.com",
});

export const getArtisteDetails = (id: string): any => {
  let url: string = `/artist/${id}`;

  return AxiosDeezer.get(url);
};
