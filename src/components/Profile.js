import React from "react";
import { Grid, Text, Image } from "../elements";
// import HeartButton from "./HeartButton";

const Profile = (props) => {
  return (
    <React.Fragment>
      <Grid flex padding="10px" width="50vw" margin="auto">
        <Grid flex justify-content="left" width="50%">
          <Image shape="circle" src={props.src} />
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
        <Grid>{/* <HeartButton /> */}</Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Profile;
