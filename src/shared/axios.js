import axios from 'axios';

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: 'http://localhost:3001/',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

export const apis = {
  // 작품 불러오기
  getWork: () => instance.get('../redux/modules/work'),
  // 게시물 작성하기
  createWork: (contents) => instance.post('../redux/modules/work', contents),
  // 게시물 수정하기
  editWork: (id, content) => instance.put(`../redux/modules/work/${id}`, content),
  // 게시물 삭제하기
  delWork: (id) => instance.delete(`../redux/modules/work/${id}`),
};