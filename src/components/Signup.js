import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import API from "../utils/API";
import Login from "./Login";

class Signup extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        passwordconfirm: "",
        users : [
        ]
    }
    componentDidMount = () => {
        API.getUsernames()
    }
    
    handleFormInput = (event) => {
        let value = event.target.value;
        const name = event.target.name;
    
        this.setState({ [name] : value})
        console.log(this.state);
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        this.handleFormInput(event);

        if (!this.state.username || !this.state.email || !this.state.password || !this.state.passwordconfirm) {
            alert("A field is empty");
        }
        else if (this.state.password !== this.state.passwordconfirm) {
            alert("Passwords are different");
        }
        else {
            API.getUsernames()
            .then(res => this.setState({ users : res.data }))
            if (this.state.username.value === this.state.users.find) {
                alert("This username already exists");
            }
            else {
                API.newUser([this.state])
                .then(() => withRouter(Login));
            }
        }
    }

    render() {
        return (
            <div className="loginbody w-container">
                <div className="signupdiv">
                    <div className="form-block w-form">
                        <form id="wf-form-signupform" name="wf-form-signupform" data-name="signupform" className="signupdiv w-clearfix">
                        <h1 className="loginheading">Signup</h1>
                        <label htmlFor="node-3">Username</label><input type="text" onChange={this.handleFormInput} value={this.state.username} name="username" maxLength={20} required className="w-input" />
                        <label htmlFor="node-2">Email</label><input type="email" onChange={this.handleFormInput} value={this.state.email} name="email"  maxLength={40} required className="w-input" />
                        <label htmlFor="node">Password</label><input type="password" onChange={this.handleFormInput} value={this.state.password} name="password"  maxLength={40} required className="w-input" />
                        <label htmlFor="node">Password Confirm</label><input type="password" onChange={this.handleFormInput} value={this.state.passwordconfirm} name="passwordconfirm"  maxLength={256} required className="w-input" />
                        <input type="submit" defaultValue="Get Started" data-wait="Please wait..." onClick={this.handleFormSubmit} className="submit-button w-button" /></form>
                    </div>
                </div>
            </div>
        );
      }
}

export default Signup;