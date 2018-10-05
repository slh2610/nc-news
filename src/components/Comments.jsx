import React, { Component } from 'react';
import CreateComment from './CreateComment';
import axios from 'axios';
import Votes from './Votes';

class Comments extends Component {
  state = {
    comments: []
  }

  render() {
    return (
      <div>
        {this.state.comments.map(comment => {
          return <div>
            <p>{comment.body}</p>
            <Votes voteCount={comment.votes} commentId={comment._id} itemType="comment" />
          </div>
        })}
        <CreateComment addComment={this.addComment} />
      </div>
    )
  }

  componentDidMount() {
    this.getCommentsByArticleById()
  }

  getCommentsByArticleById = () => {
    axios.get(`https://sallysnc-news.herokuapp.com/api/articles/${this.props.articleId}/comments`)
      .then(({ data }) => {
        this.setState({
          comments: data.comment
        })
      })
  }

  addComment = (comment) => {
    this.setState({
      comments: [...this.state.comments, comment]
    })
    axios.post(`https://sallysnc-news.herokuapp.com/api/articles/${this.props.articleId}/comments`, comment)
  }
}

export default Comments