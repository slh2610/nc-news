import React, { Component } from 'react'

class ArticleCreator extends Component {
  state = {
    topic: '',
    newTitle: '',
    newBody: ''
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} align="center">
        <input type="text" onChange={this.handleChange} value={this.state.topic} name="topic" className="articleInput" placeholder="  Topic"></input>
        <br />
        <input type="text" onChange={this.handleChange} value={this.state.newTitle} name="newTitle" className="articleInput" placeholder="  Title"></input>
        <br />
        <textarea type="text" onChange={this.handleChange} value={this.state.newBody} name="newBody" placeholder="  Enter text here"></textarea>
        <br />
        <button className="articleCreator">Submit</button>
      </form>
    )
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    const currentUser = this.props.user[0]
    event.preventDefault()

    const article = {
      title: this.state.newTitle,
      body: this.state.newBody,
      created_by: currentUser._id
    }

    this.props.addArticle(article)

    this.setState({
      topic: '',
      newTitle: '',
      newBody: ''
    })
  }
}

export default ArticleCreator