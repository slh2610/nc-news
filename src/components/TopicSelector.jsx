import React, { Component } from 'react'
import axios from 'axios'

class TopicSelector extends Component {
  state = {
    topics: []
  }

  render() {
    return (
      <select>
        <option value="select-topic">Select Topic</option>
        <option value="coding">Coding</option>
        <option value="cooking">Cooking</option>
        <option value="football">Football</option>
      </select>
    )
  }

  componentDidMount() {
    this.getArticlesByTopic()
  }

  getArticlesByTopic = () => {
    axios.get(`https://sallysnc-news.herokuapp.com/api/${this.props.match.params.topic_slug}/articles`)
      .then(({ data }) => {
        this.setState({
          topics: data
        })
      })
  }

}

export default TopicSelector
