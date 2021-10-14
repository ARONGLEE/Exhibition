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
  login: (id, pw, category) =>
    api.post(
      "http://localhost:8080/user/login",
      JSON.stringify({
        username: id,
        password: pw,
        isArtist: category,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ),
  signup: (id, pw, nick, category) =>
    api.post(
      "http://localhost:8080/user/signup",
      JSON.stringify({
        username: id,
        password: pw,
        isArtist: category,
        nickname: nick,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ),
};
