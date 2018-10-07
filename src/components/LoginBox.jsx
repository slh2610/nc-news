import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';


class LoginBox extends Component {
  state = {
    username: '',
    password: '',
    loggedIn: false
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.loggedIn && (<Redirect to='/articles' />)}
        <input type="text" onChange={this.handleChange} name="username" placeholder="  Username"></input>
        <br />
        <input type="password" onChange={this.handleChange} name="password" placeholder="  Password"></input>
        <br />
        <button class="loginBox"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXYIOebjkwNlhV545KI1zwNut9lxVVYFQx7l75CoIFEs90Z1Jf" alt="Login"></img></button>
      </form>
    )
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const user = this.state.username
    this.setState({
      loggedIn: true
    })
    this.props.getUser(user)

    this.setState({
      username: "",
      password: ""
    })
  }
}
export default LoginBox