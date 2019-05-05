import React, { Component } from "react";
import ComicPanel from "../components/ComicPanel";
import CreateBall from "../components/CreateBall";
// import API from "../utils/API";

class App extends Component {
  componentDidMount = () => {
  }
  render() {
    return (
      <div className="createcomicdiv mainbody w-clearfix">
      <h1 className="usercomichead">Your Comic</h1>
      <ComicPanel/>
      <CreateBall/>
      </div>
    );
  }
};
  
export default App;