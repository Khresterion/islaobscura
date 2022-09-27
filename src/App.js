import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { LieuDescription } from "./components/LieuDescription";

const App = () => {
  return (
    <div>
      <header className="header u-margin-bottom-big">
        <div className="header__text-box">
          <h1 class="heading-primary">
            <span className="heading-primary--main">Isla</span>
            <span className="heading-primary--sub">Obscura</span>
          </h1>
        </div>
      </header>

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/LieuDescription" exact component={LieuDescription} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
