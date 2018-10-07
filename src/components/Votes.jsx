import React, { Component } from 'react'
import axios from 'axios';

class Votes extends Component {
  state = {
    voteChanger: 0
  }

  render() {
    return (
      <div class="votes">
        <button onClick={() => this.voteChanger('up')}><span role="img" aria-label="up arrow">⬆️</span></button>
        <p>{this.state.voteChanger + this.props.voteCount}</p>
        <button onClick={() => this.voteChanger('down')}><span role="img" aria-label="down arrow">⬇️</span></button>
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