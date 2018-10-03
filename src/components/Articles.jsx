import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Articles extends Component {
  state = {
    articles: []
  }

  render() {
    const coding = this.state.articles.filter(article => article.belongs_to === 'coding')
    const football = this.state.articles.filter(article => article.belongs_to === 'football')
    const cooking = this.state.articles.filter(article => article.belongs_to === 'cooking')

    return (
      < div >
        {this.props.match.path === '/coding/articles' ?
          coding.map(article => {
            return <p key={article._id}>
              <Link to={`/articles/${article._id}`}>
                {article.title}
              </Link>
            </p>
          })
          : this.props.match.path === '/football/articles' ?
            football.map(article => {
              return <p key={article._id}>
                <Link to={`/articles/${article._id}`}>
                  {article.title}
                </Link>
              </p>
            })
            : this.props.match.path === '/cooking/articles' ?
              cooking.map(article => {
                return <p key={article._id}>
                  <Link to={`/articles/${article._id}`}>
                    {article.title}
                  </Link>
                </p>
              })
              : this.state.articles.map(article => {
                return <p key={article._id}>
                  <Link to={`/articles/${article._id}`}>
                    {article.title}
                  </Link>
                </p>
              })
        }
      </div >
    )
  }

  componentDidMount() {
    this.getArticles()
  }

  getArticles = () => {
    axios.get('https://sallysnc-news.herokuapp.com/api/articles')
      .then(({ data }) => {
        this.setState({
          articles: data.articles
        })
      })
  }

}

export default Articles
