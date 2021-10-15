// axios
import axios from "axios";

const api = axios.create({
  baseURL: "http://3.35.218.192/",
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
      "../redux/modules/user",
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
      "../redux/modules/user",
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
  //article
  // 작품 불러오기
  getWork: () => api.get("/"),
  // 게시물 작성하기
  createWork: (contents) => api.post("/work/insert", JSON.stringify(contents)),
  // 게시물 수정하기
  editWork: (id, contents) => api.put("", contents),
  // 게시물 삭제하기
  delWork: (id) => api.delete(""),
};
