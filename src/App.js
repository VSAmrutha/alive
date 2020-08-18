import React from "react";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Apps/HomePage/HomePage";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
