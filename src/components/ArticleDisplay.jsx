import React, { Component } from 'react'
import axios from 'axios'

class ArticleDisplay extends Component {
  state = {
    article: {}
  }

  render() {
    return (
      < div className="article-display" >
        <h1>{this.state.article.title}</h1>
        <p>{this.state.article.body}</p>
        <p>Comments: {this.state.article.comment_count}</p>
        <p>{this.state.article.created_at}</p>
        <button>Comment</button>
      </div >
    )
  }

  componentDidMount() {
    this.getArticleById()
  }

  getArticleById = () => {
    axios.get(`https://sallysnc-news.herokuapp.com/api/articles/${this.props.match.params.articleId}`)
      .then(({ data }) => {
        this.setState({
          article: data.article
        })
      })
  }
}

export default ArticleDisplay