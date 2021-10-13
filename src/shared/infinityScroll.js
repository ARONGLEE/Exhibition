import React from "react";
import _ from "lodash";
import { Spinner } from "../elements";

const InfinityScroll = (props) => {
  const { children, callNext, is_next, loading } = props;

  const _handleScroll = _.throttle(() => {
    if (loading) {
      return;
    }
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    //스크롤 계산!
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    if (scrollHeight - innerHeight - scrollTop < 200) {
      callNext();
    }
  }, 300);

  const handleScroll = React.useCallback(_handleScroll, [loading]);

  React.useEffect(() => {
    if (loading) {
      return;
    }
    //만약에 is_next가 있을 경우 실행, 그렇지 않을경우 실행 안함
    if (is_next) {
      // scroll 이벤트 구독함
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }
    //클래스형 컴포넌트에서는 이벤트 구독 해제를 언마운트를 사용
    //함수형 컴포넌트에서는 이벤트 구독 해제를 useEffect에서 return으로 넘긴다.
    return () => window.removeEventListener("scroll", handleScroll);
  }, [is_next, loading]);

  return (
    <React.Fragment>
      {props.children}
      {is_next && <Spinner />}
    </React.Fragment>
  );
};

InfinityScroll.defaultProps = {
  children: null,
  //다음 목록 불러오라는 의미
  callNext: () => {},
  //다음께 있는지 없는지 알 수 있음
  is_next: false,
  loading: false,
};
export default InfinityScroll;
