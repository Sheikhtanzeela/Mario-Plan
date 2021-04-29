import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastname: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">SignUp</h5>
          <div className="input-field">
            <label htmlFor="email">UserName/Eail</label>
            <input type="email" id="email" onChange={this.handleChange}></input>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="firstName">firstName</label>
            <input
              type="text"
              id="firstName"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">lastName</label>
            <input
              type="text"
              id="lastName"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">SignUp</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
