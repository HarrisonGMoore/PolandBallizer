import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserComics from "./pages/UserComics";
import CreateComic from "./pages/CreateComic";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/usercomics" component={UserComics} />
          <Route exact path="/createcomic" component={CreateComic} />
        </Switch>
      </div>
    </Router>

    );
  }
};
  
export default App;