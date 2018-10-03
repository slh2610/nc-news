import React, { Component } from 'react'

class CreateUserBox extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Name:
        <input type="text"></input>
          </label> <br />
          <label>
            Username:
        <input type="text"></input>
          </label> <br />
          <label>
            Password:
        <input type="text"></input>
          </label> <br />
          <label>
            Avatar:
        <input type="text"></input>
          </label><br />
          <button>Create</button>
        </form>
      </div>
    )
  }
}

export default CreateUserBox
