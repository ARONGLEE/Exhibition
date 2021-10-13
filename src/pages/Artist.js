import React from "react";

import Header from "../components/Header";
import Profile from "../components/Profile";
import Work from "../components/Work";

import { Grid, Button } from "../elements";
import { history } from "../redux/configureStore";

const Artist = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Grid>
        <Profile />
      </Grid>
      <Grid>
        <Work />
      </Grid>
      <Button
        is_float
        text="+"
        _onClick={() => {
          history.push("/insert");
        }}
      ></Button>
    </React.Fragment>
  );
};

export default Artist;
