import React, { Component } from 'react'

class CreateComment extends Component {
  state = {
    commentText: ''
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Enter Comment Here:
          <textarea type="text" onChange={this.handleChange} value={this.state.commentText}></textarea>
        </label>
        <button>Submit</button>
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
    event.preventDefault()
    const comment = {
      body: this.state.commentText,
      created_by: "5b9b87ceed324f1a4ce8eb06"
    }
    this.props.addComment(comment)

    this.setState({
      commentText: ''
    })
  }
}

export default CreateComment