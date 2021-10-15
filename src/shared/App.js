import "./App.css";
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import { history } from "../redux/configureStore";
import { ConnectedRouter } from "connected-react-router";

import Header from "../components/Header";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Artist from "../pages/Artist";
import WorkInsert from "../pages/WorkInsert";
import WorkList from "../pages/WorkList";

import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/work";
import WorkDetail from "../pages/WorkDetail";
import WorkUpdate from "../pages/WorkUpdate";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postActions.getWorkMiddleware());
  }, []);

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/artist" exact component={Artist} />
        <Route path="/insert" exact component={WorkInsert} />
        <Route path="/" exact component={WorkList} />
        <Route path="/detail/:id" exact component={WorkDetail} />
        <Route path="/update/:id" exact component={WorkUpdate} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
