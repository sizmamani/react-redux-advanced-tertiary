import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from '../components/navigator'
import HomeComponent from "../views/home";
import AboutComponent from "../views/about";



const AppRouter = () => (
  <Router>
      <div>
        <Header/>  
        <Route path="/" exact component={HomeComponent} />
        <Route path="/about" exact component={AboutComponent} />
      </div>
  </Router>
);

export default AppRouter;