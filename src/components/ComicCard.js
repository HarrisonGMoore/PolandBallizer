import React, { Component } from "react";
import API from "../utils/API";

class ComicCard extends Component {
  state = {
    cardID : 0,
    cardName : "",
    cardImage : "",
    numofcomics : 0
  }

  componentDidMount = () => {
    API.userComic()
    .then(data => this.setState({
      cardID : data.comicNum
    }))
    API.findPanel(1)
    .then(data => this.setState({
      cardImage : data.innerHTML
    }))
  }
  editComic = () => {
    API.createComic()
  }

  removeComic = () => {
    API.deleteComic(this.statecardID)
  }

  downloadComic = card => {
    API.findPanel(1)
    .then()
  }

  render() {
    return (
      <div className="comicsamplediv w-clearfix">
        {/* <h4 className="comicsamplehead" ></h4> */}
        <img width={200} height={120} sizes="196px" src={this.state.cardImage} alt="first comic panel" />
        <button className="comicsamplebutton w-button" onClick={this.editComic} id="editButton">Edit</button>
        <button onClick={this.downloadComic} className="comicsampledownloaddiv w-button"/>
        <button onClick={this.removeComic} className="comicsamplebutton deletebutton w-button" id="deleteButton"/>
        <button href="https://www.twitter.com" className="comicsamplebutton comicsampletweet w-button" />
      </div>
      );
    }
}
export default ComicCard;