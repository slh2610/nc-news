import React, { Component } from 'react'
import axios from 'axios';

class Votes extends Component {
  state = {
    voteChanger: 0
  }

  render() {
    return (
      <div>
        <p>Votes: {this.state.voteChanger + this.props.voteCount}</p>
        <button onClick={() => this.voteChanger('up')}>Up</button>
        <button onClick={() => this.voteChanger('down')}>Down</button>
      </div>
    )
  }

  voteChanger = (direction) => {
    const newVotes = direction === 'up' ? 1 : -1
    if (this.props.itemType === "article") {
      this.setState({
        voteChanger: newVotes
      })
      this.changeArticleVotes(direction)
    } else {
      this.setState({
        voteChanger: newVotes
      })
      this.changeCommentVotes(direction)
    }
  }

  changeArticleVotes = (direction) => {
    return axios.patch(`https://sallysnc-news.herokuapp.com/api/articles/${this.props.id}?vote=${direction}`)
  }

  changeCommentVotes = (direction) => {
    return axios.patch(`https://sallysnc-news.herokuapp.com/api/comments/${this.props.commentId}?vote=${direction}`)
  }

}

export default Votes