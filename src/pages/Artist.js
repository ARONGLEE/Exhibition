import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import { Grid, Button } from "../elements";

const Artist = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Grid>
        <Profile />
      </Grid>
      <Button is_float text="+"></Button>
    </React.Fragment>
  );
};

export default Artist;
