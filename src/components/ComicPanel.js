import React, { Component } from "react";

class ComicPanel extends Component {
    state = {
    coordinates : {
        left : 0,
        top : 0
        },
    innerDiv : ""
    }

    updateCoordinates = event => {
        let x = event.clientX;
        let y =event.clientY;
        this.setState({
           left : x, top: y
        })
    }
    render() {
        return (
        <div id="comicPanelDiv" onClick={this.updateCoordinates} className="usercomicpanel">
        {this.state.innerDiv}
        </div>
        )
    }
}
    
export default ComicPanel;