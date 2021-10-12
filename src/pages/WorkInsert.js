import React from "react";
import { Button, Grid, Input } from "../elements";
import Upload from "../shared/Upload";
import img from "../shared/preview.png";

const WorkInsert = (props) => {
  return (
    <React.Fragment>
      <Grid width="450px" margin="100px auto">
        <Grid margin="10px 0px" center>
          <img src={img} width="330px" />
          <Upload margin="10px 0px" />
        </Grid>
        <Grid center>
          <Input margin="10px 0px" placeholder="제목" />
          <Input margin="10px 0px" placeholder="설명" />
          <Input margin="10px 0px" placeholder="크기" />
          <Input margin="10px 0px" placeholder="재료" />
          <Input margin="10px 0px" placeholder="제작년도" />
        </Grid>
        <Grid center>
          <Button padding="10px" width="80px">
            포스팅
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default WorkInsert;
