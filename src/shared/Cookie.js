// 첫째, 쿠키에 저장하는 함수(쿠키저장)
const setCookie = (name, value, exp = 1) => {
  // 날짜 객체를 만든다.
  let date = new Date();
  // 날짜를 만들어줍니다.
  // setTime을 사용해 일시를 설정해준다.
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  // ``백틱 안에 name, value, exp를 넣어주고 toUTCString사용해 문자로 넘겨줄 것이다.
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
};

// 둘째, 쿠키를 삭제하는 함수(쿠키삭제)
const deleteCookie = (name) => {
  // 만료일을 예전으로 설정해 쿠키를 지웁니다(날짜는 무조건 과거로 설정해야한다).
  let date = new Date("2020-01-01").toUTCString();
  document.cookie = name + "=; expires=" + date;
};

// export를 통해 밖에서도 사용할 수 있도록 설정해 둔다.
export { setCookie, deleteCookie };
