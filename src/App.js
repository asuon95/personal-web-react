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
import Loader from "./common/loader";
import ProjectNewsAPIBreakdown from "./components/project-news-api-breakdown";

class App extends Component {
  state = {
    loading: true
  };

  /*
  Loader
  
  Declare loading state to true. A sleep() that resturn a Promise and 
  resolve timeOut from x-seconds. A wait() function where we initialize
  the wait time and setState loading to false. In componentDidMount()
  we call the wait() and passes the wait time. 
  
  Use conditional rendering to show <Loader />. Note the import and 
  loader.jsx which has the loading details from font-awesome. CSS
  loader and conter-loader class.

  */
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({ loading: false });
  };

  componentDidMount() {
    this.wait(2000);
  }

  render() {
    if (this.state.loading) return <Loader />;
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
            <Route
              path="/project-news-api-breakdown"
              component={ProjectNewsAPIBreakdown}
            ></Route>
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
