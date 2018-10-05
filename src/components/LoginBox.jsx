import React, { Component } from 'react'


class LoginBox extends Component {
  state = {
    username: '',
    password: ''
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
        <input type="text" onChange={this.handleChange} name="username"></input>
        </label> <br />
        <label>
          Password:
        <input type="password" onChange={this.handleChange} name="password"></input>
        </label> <br />
        <button>Login</button>
      </form>
    )
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const user = this.state.username
    this.props.getUser(user)

    this.setState({
      username: "",
      password: ""
    })
  }
}
export default LoginBox