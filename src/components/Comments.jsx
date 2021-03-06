import React, { Component } from 'react';
import CreateComment from './CreateComment';
import axios from 'axios';
import Votes from './Votes';
import DeleteComment from './DeleteComment';

class Comments extends Component {
  state = {
    comments: []
  }

  render() {
    return (
      <div>
        {this.state.comments.map(comment => {
          return <div class="comments">
            <p>{comment.body}</p>
            <Votes voteCount={comment.votes} commentId={comment._id} itemType="comment" user={this.props.user} />
            <DeleteComment id={comment._id} deleteComment={this.deleteComment} />
          </div>
        })}
        {Array.isArray(this.props.user) ? <CreateComment addComment={this.addComment} />
          : <p>You must be logged in to add a comment</p>}
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

  deleteComment = (id) => {
    const comments = this.state.comments.filter(comment => {
      return comment._id !== id
    })
    this.setState({
      comments
    })
    axios.delete(`https://sallysnc-news.herokuapp.com/api/comments/${id}`, id)
  }
}

export default Comments