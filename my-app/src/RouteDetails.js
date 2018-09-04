import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Men from "./Components/View/Men";
import Woman from "./Components/View/Woman";
import Mobiles from "./Components/View/Mobiles";
import HomeAndKitchen from "./Components/View/HomeAndKitchen";
import BabyAndKids from "./Components/View/BabyAndKids";
import Electronic from "./Components/View/Electronic";

const RouteDetails = (props) => {
  return (
    <Router>
      <div className="router-wrapper">
        <div className="route-list-info">
        <ul>
          <li>
            <Link to={"/"}>Mobiles</Link>
          </li>
          <li>
            <Link to={"/Men"}>Men</Link>
          </li>
          <li>
            <Link to={"/Woman"}>Woman</Link>
          </li>
          <li>
            <Link to={"/Electronic"}>Electronic</Link>
          </li>
          <li>
            <Link to={"/HomeAndKitchen"}>Home & Kitchen</Link>
          </li>
          <li>
            <Link to={"/BabyAndKids"}>Baby & Kids</Link>
          </li>
        </ul>
        </div>
        <div className="route-links-info">
        <Switch>
          <Route exact path="/" component={Mobiles} />
          <Route exact path="/Men" component={Men} />
          <Route exact path="/Woman" component={Woman} />
          <Route exact path="/Electronic" component={Electronic} />
          <Route exact path="/HomeAndKitchen" component={HomeAndKitchen} />
          <Route exact path="/BabyAndKids" component={BabyAndKids} />
        </Switch>
        </div>
      </div>
    </Router>
  );
};

export default RouteDetails;
