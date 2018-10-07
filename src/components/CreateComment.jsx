import React, { Component } from 'react'

class CreateComment extends Component {
  state = {
    commentText: ''
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea type="text" onChange={this.handleChange} value={this.state.commentText} class="commentText" placeholder="Enter comment here"></textarea>
        <br />
        <button class="commentButton">Submit</button>
      </form>
    )
  }

  handleChange = (event) => {
    const text = event.target.value
    this.setState({
      commentText: text
    })
  }

  handleSubmit = (event) => {
    const currentUser = this.props.user[0]
    event.preventDefault()
    const comment = {
      body: this.state.commentText,
      created_by: currentUser._id
    }
    this.props.addComment(comment)

    this.setState({
      commentText: ''
    })
  }
}

export default CreateComment