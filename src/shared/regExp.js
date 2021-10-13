// 아이디 정규식
export const idCheck = (id) => {
  let regExp = /^[0-9a-zA-Z]/;
  return regExp.test(id);
};

// 닉네임 정규식
export const nickCheck = (nickname) => {
  let regExp = /^[0-9a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  return regExp.test(nickname);
};
