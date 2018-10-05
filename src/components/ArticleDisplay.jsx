import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Comments from './Comments';
import Votes from './Votes';
import axios from 'axios';

class ArticleDisplay extends Component {
  state = {
    article: {}
  }

  render() {
    if (!this.state.article.title) return <p>Loading....</p>
    return (
      < div className="article-display" >
        <h1>{this.state.article.title}</h1>
        <p>{this.state.article.body}</p>
        <p>Comments: {this.state.article.comment_count}</p>
        <p>{this.state.article.created_at}</p>
        <Votes voteCount={this.state.article.votes} id={this.props.match.params.articleId} itemType="article" />
        <p>
          {Array.isArray(this.props.user) ? <Link to={`/articles/${this.state.article._id}/comments`}>
            Comments
        </Link>
            : <p>You must be logged in to view comments</p>}
        </p>
        <Route path={`/articles/${this.state.article._id}/comments`} render={() => <Comments articleId={this.state.article._id} user={this.props.user} />} />
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