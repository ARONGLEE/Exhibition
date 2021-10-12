import "./App.css";
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "../components/Header";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostList from "../pages/PostList";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" exact component={PostList} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
