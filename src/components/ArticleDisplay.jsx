import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Comments from './Comments';
import Votes from './Votes';
import axios from 'axios';
import dayjs from 'dayjs'

class ArticleDisplay extends Component {
  state = {
    article: {}
  }

  render() {
    const { _id, title, body, created_at, votes, comment_count } = this.state.article
    const { articleId } = this.props.match.params
    const { user } = this.props

    if (!this.state.article.title) return <p>Loading....</p>
    return (
      < div className="container" >
        <h1 className="title">{title}</h1>
        <p>{body}</p>
        <p class="date">{dayjs(created_at).format('MMMM D YYYY, h:mm:ss a')}</p>
        <Votes voteCount={votes} id={articleId} itemType="article" className="votes" />
        <p>Comments: {comment_count}</p>
        <p>
          {Array.isArray(user) ? <Link to={`/articles/${_id}/comments`}>
            Comments
        </Link>
            : <p>You must be logged in to view comments</p>}
        </p>
        <Route path={`/articles/${_id}/comments`} render={() => <Comments articleId={_id} user={user} className="comments" />} />
      </div >
    )
  }

  componentDidMount() {
    this.getArticleById()
  }

  getArticleById = () => {
    const { articleId } = this.props.match.params
    axios.get(`https://sallysnc-news.herokuapp.com/api/articles/${articleId}`)
      .then(({ data }) => {
        this.setState({
          article: data.article
        })
      })
  }


}

export default ArticleDisplay