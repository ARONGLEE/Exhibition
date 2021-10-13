import React from "react";

import Grid from "../elements/Grid";
import Image from "../elements/Image";
import ModalContainer from "./ModalContainer";
const Work = (props) => {
  return (
    <React.Fragment>
      <Grid grid>
        <Image shape="rectangle" src={props.src} />
        <Image shape="rectangle" src={props.src} />
        <Image shape="rectangle" src={props.src} />
        <Image shape="rectangle" src={props.src} />
        <Image shape="rectangle" src={props.src} />
        <Image shape="rectangle" src={props.src} />
        <Image shape="rectangle" src={props.src} />
        <Image shape="rectangle" src={props.src} />
        <Image shape="rectangle" src={props.src} />
      </Grid>
      <ModalContainer />
    </React.Fragment>
  );
};

Work.defaultProps = {
  image_url:
    "https://mblogthumb-phinf.pstatic.net/20160316_188/machsz_1458108041064UOBNl_JPEG/22.jpg?type=w2",
  workTitle: "Lorem",
  workDesc: "lorem ipsum dolor sit amet consectetur adipiscing elit",
  workSize: "160 * 160cm",
  workMetarial: "mixed media",
  workMade: "2021",
};

export default Work;
