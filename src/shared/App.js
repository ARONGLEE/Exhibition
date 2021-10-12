import "./App.css";
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "../components/Header";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostList from "../pages/PostList";
import Artist from "../pages/Artist";
import WorkInsert from "../pages/WorkInsert";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" exact component={PostList} />
        <Route path="/artist" exact component={Artist} />
        <Route path="/insert" exact component={WorkInsert} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
