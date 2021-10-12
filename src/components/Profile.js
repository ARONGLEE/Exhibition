import React from "react";
import { Grid, Text } from "../elements";
import img from "../shared/basic.jpg";

const Profile = (props) => {
  return (
    <React.Fragment>
      <Grid
        flex
        border="1px solid #DCDCDC"
        padding="10px"
        width="70vw"
        margin="auto"
      >
        <Grid flex justify-content="left">
          <img src={img} width="90px" />
        </Grid>
        <Grid>
          <Text size="20px" bold>
            Username
          </Text>
          <Text color="#212121">Nickname</Text>
          <Text size="13px" color="#b9b2b2">
            Description
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Profile;
