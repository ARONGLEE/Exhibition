import React, { useEffect } from 'react';

import Grid from "../elements/Grid";
import Image from "../elements/Image";
import ModalContainer from "./ModalContainer";

import { useDispatch, useSelector } from 'react-redux';
import { getWorkMiddleware } from '../redux/modules/work';

const Work = (
  props
  ) => {
    console.log(props);
  // const dispatch = useDispatch();
  // const work = useSelector((store) => store.work.work_list);

  return (
    <React.Fragment>
        <Image shape="rectangle" src={props.image}/>
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
