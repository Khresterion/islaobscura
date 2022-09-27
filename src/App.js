import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { LieuDescription } from "./components/LieuDescription";

const App = () => {
  return (
    <div>
      <h1>Isla Obscura</h1>

      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={Home}/>
          <Route path="/LieuDescription" exact component={LieuDescription}/>
          
        </Switch>
      </BrowserRouter>  

    </div>
  )
};

export default App; 