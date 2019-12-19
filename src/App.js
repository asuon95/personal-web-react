import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./css/customScrollbar.css";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Project from "./components/project";
import NotFound from "./components/notFound";
import Contact from "./components/contact";
import Education from "./components/education";
import Footer from "./common/footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-container">
          {" "}
          <ToastContainer />
          <NavBar />
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/education" component={Education}></Route>
            <Route path="/project" component={Project}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
