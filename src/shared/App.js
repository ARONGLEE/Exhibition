import "./App.css";
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "../components/Header";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Artist from "../pages/Artist";
import WorkInsert from "../pages/WorkInsert";
import WorkList from "../pages/WorkList";

import { useDispatch } from 'react-redux';
import { actionCreators as postActions } from "../redux/modules/work";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postActions.getWorkMiddleware());
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/artist" exact component={Artist} />
        <Route path="/insert" exact component={WorkInsert} />
        <Route path="/" exact component={WorkList} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
