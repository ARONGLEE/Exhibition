import React, { useEffect } from "react";

import { Grid, Image, Button } from "../elements";

import { useDispatch, useSelector } from "react-redux";
import { getWorkMiddleware } from "../redux/modules/work";
import { history } from "../redux/configureStore";

const Work = (props) => {
  console.log(props);
  // const dispatch = useDispatch();
  // const work = useSelector((store) => store.work.work_list);

  return (
    <React.Fragment>
      <Image shape="rectangle" src={props.image} />
      {/* 아영- 수정버튼 추가 */}
      {/* <Button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          history.push(`/update/${props.id}`);
        }}
      >
        수정
      </Button> */}
    </React.Fragment>
  );
};

Work.defaultProps = {
  image:
    "https://cdn.crowdpic.net/list-thumb/thumb_l_7BE2B0B597B156E87AAF3C41AB15ABEC.jpg",
  workTitle: "Lorem",
  workDesc: "lorem ipsum dolor sit amet consectetur adipiscing elit",
  workSize: "160 * 160cm",
  workMetarial: "mixed media",
  workMade: "2021",
};

export default Work;
