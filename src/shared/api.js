// axios
import axios from "axios";

const api = axios.create({
  baseURL: "",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
  return config;
});

export const apis = {
  // user
  login: (id, pw, artist) =>
    api.post("/api/login", { password: pw, nickname: id, isArtist: artist }),
  signup: (is_artist, nick, id, pw) =>
    api.post("/api/signup", {
      username: nick,
      password: pw,
      nickname: id,
      isArtist: is_artist,
    }),
};
