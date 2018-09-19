import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Men from "./View/Men";
// import Woman from "./View/Woman";
// import Mobiles from "./View/Mobiles";
// import HomeAndKitchen from "./View/HomeAndKitchen";
// import BabyAndKids from "./View/BabyAndKids";
// import Electronic from "./View/Electronic";
import DashView from './Components/DashView';
import Dash from './View/Dash';
import ProductPage from './Components/ProductPage';

const RouteDetails = (props) => {
  return (
    <Router>
      <div className="router-wrapper">
        {/* <div className="route-list-info">
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
        </div> */}
        <div className="route-links-info">
        <Switch>
          <Route exact path="/" component={Dash} />
          <Route exact path="/MobileList" component={DashView} />
          <Route exact path="/products/:id" component={ProductPage} />
          {/* <Route exact path="/Woman" component={Woman} />
          <Route exact path="/Electronic" component={Electronic} />
          <Route exact path="/HomeAndKitchen" component={HomeAndKitchen} />
          <Route exact path="/BabyAndKids" component={BabyAndKids} /> */}
        </Switch>
        </div>
      </div>
    </Router>
  );
};

export default RouteDetails;
