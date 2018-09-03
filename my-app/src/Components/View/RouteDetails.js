import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Men from "./Men";
import Woman from "./Woman";
import Mobiles from "./Mobiles";
import HomeAndKitchen from "./HomeAndKitchen";
import BabyAndKids from "./BabyAndKids";
import Electronic from "./Electronic";

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
        {/* <div className="route-links-info">
        <Switch>
          <Route exact path="/" component={Mobiles} />
          <Route exact path="/Men" component={Men} />
          <Route exact path="/Woman" component={Woman} />
          <Route exact path="/Electronic" component={Electronic} />
          <Route exact path="/HomeAndKitchen" component={HomeAndKitchen} />
          <Route exact path="/BabyAndKids" component={BabyAndKids} />
        </Switch>
        </div> */}
      </div>
    </Router>
  );
};

export default RouteDetails;
