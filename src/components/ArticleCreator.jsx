import React, { Component } from 'react'

class ArticleCreator extends Component {
  state = {
    newId: null,
    newTopic: '',
    newTitle: '',
    newBody: ''
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label>Topic
         <input type="text" onChange={this.handleChange} value={this.state.newTopic} name="newTopic"></input>
        </label>
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
      _id: Math.random(),
      topic: this.state.newTopic,
      title: this.state.newTitle,
      body: this.state.newBody
    }

    this.props.addArticle(article)

    this.setState({
      newTopic: '',
      newTitle: '',
      newBody: ''
    })
  }
}

export default ArticleCreator