import React, { Component } from 'react'

class ArticleCreator extends Component {
  state = {
    newTitle: '',
    newBody: ''
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label>Title
         <input type="text" onChange={this.handleChange} value={this.state.newTitle} name="newTitle" ></input>
        </label>
        <label>Enter Text Here:
          <textarea type="text" onChange={this.handleChange} value={this.state.newBody} name="newBody"></textarea>
        </label>
        <button>Submit</button>
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

    const article = {
      title: this.state.newTitle,
      body: this.state.newBody,
      created_by: "5b9ab6c19f86e16cdcf7636a"
    }

    this.props.addArticle(article)

    this.setState({
      newTitle: '',
      newBody: ''
    })
  }
}

export default ArticleCreator