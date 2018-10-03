import React, { Component } from 'react'

class LoginBox extends Component {
  render() {
    return (
      <form>
        <label>
          Username:
        <input type="text"></input>
        </label> <br />
        <label>
          Password:
        <input type="text"></input>
        </label> <br />
        <button>Login</button>
      </form>
    )
  }
}

export default LoginBox