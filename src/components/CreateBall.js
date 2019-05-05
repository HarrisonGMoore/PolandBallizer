import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Panel from "./ComicPanel";
import API from "../utils/API";

class CreateBall extends Component {
    state = {
        width : 200,
        country : [
            "../../public/images/polandballImages/franceflag.png",
            "../../public/images/polandballImages/UKflag.png",
            "../../public/images/polandballImages/USAflag.png",
            "../../public/images/polandballImages/germanyflag.png",
            "../../public/images/polandballImages/netherlandsflag.png",
            "../../public/images/polandballImages/russiaflag.png",
            "../../public/images/polandballImages/southafricaflag.png",
            "../../public/images/polandballImages/canadaflag.png",
            "../../public/images/polandballImages/finlandflag.png",
            "../../public/images/polandballImages/polandflag.png"
        ],

        eyes : [
            "../../public/images/polandballImages/eyes/eyesangry.png",
            "../../public/images/polandballImages/eyes/eyesclosed.png",
            "../../public/images/polandballImages/eyes/eyesdead.png",
            "../../public/images/polandballImages/eyes/eyeshappy.png",
            "../../public/images/polandballImages/eyes/eyesnormal.png",
            "../../public/images/polandballImages/eyes/eyesstartled.png",
            "../../public/images/polandballImages/eyes/eyesunimpressed.png",
            "../../public/images/polandballImages/eyes/eyeswink.png",
            "../../public/images/polandballImages/eyes/eyesworried.png"
        ],
       
        currentCountry : this.country,
        currentEyes : this.eyes,
        facing : 0, 
        eyesPosition : this.facing*(-this.width/10),
        generalposition : {
            allowClick : false,
            left : 0,
            top : 0
        },
        dialouge : '',
        previewimage : ["<div style={", this.width, "} className='userballPreview'><img style={", this.width, "} className='ball ballFlag' src=", this.currentCountry, "alt='ballflag'/> <img style={", this.width, "} className='ball' alt='ballborder'/><img style={", this.width, "px, margin-left: ", this.eyesPosition, "} className='ball' alt='balleyes' src", this.currentEyes, "/>/div>"],
        panelnum : 1,
        currentpanel : 1
    }

    componentDidMount = () => {}
        
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };
    newpanel = () => {
        Panel.state.panels.panelnum++;
        Panel.state.panels.innerDiv.push(Panel.render());
    }
    placeBallToggleOn = event => {
        this.setState({
            allowClick : true
        });
    }
    newPanel = () => {
        API.updatePanel(this.state.panelnum)
        .then(this.setState({ panelnum : this.panelnum.value++ }))
        .then(Panel.render())
    }
    deletePanel = () => {
        API.deletePanel(this.state.panelnum)
    }
    saveComic = () => {
        API.updateComic()
        .then(withRouter("UserComics"));
    }
    render() {
      return (
    <div className="userballcreatordiv w-clearfix">
        <h1 className="userballcreatorhead">Your Countryball</h1>
        <h4 className="userballpreviewdiv">Preview</h4>
        <div className="userballPreview">
            <img className="ball ballFlag" src={this.state.currentCountry} alt="ballflag"/>
            <img className="ball" alt="ballborder"/>
            <img className="ball" src={this.state.currentEyes} alt="balleyes"/>
        </div>
        <div className="userballselector w-form">
        <form className="ballselector">
            <select id="countryList" name="countryList" onChange={this.handleInputChange} value={this.state.currentCountry} name="countrylist" required data-name="countryList" className="w-select">
                <option value={this.state.country.france}>Select a country...</option>
                <option value={this.state.country.france}>France</option>
                <option value={this.state.country.uk}>UnitedKingdom</option>
                <option value={this.state.country.usa}>USA</option>
                <option value={this.state.country.germany}>Germany</option>
                <option value={this.state.country.netherlands}>Netherlands</option>
                <option value={this.state.country.russia}>Russia</option>
                <option value={this.state.country.southafrica}>South Africa</option>>
                <option value={this.state.country.canada}>Canada</option>
                <option value={this.state.country.finland}>Finland</option>
                <option value={this.state.country.poland}>Poland</option>
            </select>
            
            <select id="directionList" onChange={this.handleInputChange} name="directionList" required data-name="directionList" className="w-select">
                <option value={this.state.facing.neutral}>Your ball will face the direction of...</option>
                <option value={this.state.facing}>Left</option>
                <option value={this.state.facing}>Right</option>
                <option value={this.state.facing}>Center</option>
            </select>
            
            <select data-name="eyeList" onChange={this.handleInputChange} value={this.state.currentEyes} required className="w-select">
                <option value={this.state.eyes.neutral}>The eye expression will be...</option>
                <option value={this.state.eyes.closed}>Closed</option>
                <option value={this.state.eyes.happy}>Happy</option>
                <option value={this.state.eyes.sad}>Sad</option>
                <option value={this.state.eyes.angry}>Angry</option>
                <option value={this.state.eyes.unimpressed}>Unamused</option>
                <option value={this.state.eyes.questioning}>Questioning</option>
                <option value={this.state.eyes.shocked}>Shocked</option>
                <option value={this.state.eyes.laughing}>Laughing</option>
                <option value={this.state.eyes.dead}>Dead</option>
                <option value={this.state.eyes.neutral}>Neutral</option>
            </select>
                
            <h4 className="usersizehead">Ball Size (pixels)</h4>
            <input type="text" maxLength={20} name="width" value={this.state.width} onChange={this.handleInputChange} placeholder="default 200px" required className="w-input" />
            <h4 className="userdialougehead">Your Dialouge</h4>
            <textarea id="ballDialouge" maxLength={400} placeholder="Bonjour Allemagne" name="dialouge" value={this.state.dialouge} onChange={this.handleInputChange} className="paneldialougeform w-input"></textarea>
        </form>
        
        <button id="userPlaceBall" onClick={this.placeBallToggleOn} className="usersubmitbutton w-button">Place Countryball</button>
        <h6 className="placinginstructions">Once clicked, hover over the blank page and click to where you want to position the item</h6>
            <div className="usernewpaneldiv w-form">
                <h3 className="userpanelhead">Switch Panel</h3>
                <form method="post" className="w-clearfix">
                    <select id="panelSwitch" className="w-select" onClick={this.handleInputChange}><option value={this.state.currentpanel}>Panel 1</option></select>
                    <input type="submit" id="userDeletePanelSubmit" onClick={this.deletePanel} className="userpanelbutton delete w-button" />
                    <input type="submit" id="userNewPanel" onClick={this.newPanel} className="userpanelbutton w-button" />
                    <input type="submit" defaultValue="Finish and Save Your Comic" onCLick={this.saveComic} id="userSaveSubmit" className="userpanelbutton save w-button" />
                </form>
            </div>
        </div>
    </div>
    )}
}

export default CreateBall;

