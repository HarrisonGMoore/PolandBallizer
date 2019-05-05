import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import API from "../utils/API";
import UserComics from "../pages/UserComics";

class Login extends Component {
   constructor(props) {
    super(props);
    this.state = {
      userID : "",
      username : "",
      password : "",
      numofcomics : 0,
      users: []
     };
  }

  componentDidMount = () => {
    API.getUsernames()
  }

  handleFormInput = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({ [name] : value})
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.handleFormInput(event);

    if (!this.state.username || !this.state.password) {
        alert("A field is empty");
    }

    else {
        API.getUsernames()
        .then(res => this.setState({ users : res.data }))
        if (this.state.username.value === this.state.users.find ) {
            alert("This username already exists");
        }
        else {
            withRouter(UserComics);
        }
    }
  }
  render() {
    return (
      <div className="loginbody w-container">
          <div className="logindiv">
              <h1 className="loginheading">Login</h1>
              <div className="form-block w-form">
              <form className="loginform w-clearfix">
                  <label htmlFor="username-2">Username</label><input type="text" className="w-input" maxLength={256} name="username" onChange={this.handleFormInput} value={this.state.username} data-name="username" placeholder="johnsmith" id="username" required/>
                  <label htmlFor="password">Password</label><input type="password" className="w-input" maxLength={256} name="password" onChange={this.handleFormInput} value={this.state.password} data-name="password" placeholder="super secret" id="password" required />
                  <input type="submit" defaultValue="Submit" onClick={this.handleFormSubmit} data-wait="Submit" id="loginSubmit" className="submit-button w-button" /></form>
              </div>
          </div>
      </div>
    );
  }
}

export default Login;