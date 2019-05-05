import React, { Component } from "react";
import ComicCard from "../components/ComicCard";
import API from "../utils/API";
import Login from "../components/Login";

class UserComics extends Component {
  componentDidMount = () => {
    API.UserComics(Login.state.userID)
    .then((data) => {
      let numOfComics = data.numOfComics;
      let i = 0;
      while (i < numOfComics) {
        ComicCard.render();
        i++;
      }
    })
  }
  render() {
    return (
      <div className="mainbody w-container">
        <h1 className="usercomicshead">Your Comics</h1>
        <div className="comicsampledivcenter w-clearfix">
          <ComicCard />
        </div>
      </div>
    );
  }
};
  
export default UserComics;