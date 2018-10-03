import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Articles extends Component {
  state = {
    articles: []
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {/* {this.props.match.params.path === "/coding/articles" ? 
      this.state.articles.filter(article => {
        
      }) */}

        {this.state.articles.map(article => {
          return <p key={article._id}>

            <Link to={`/articles/${article._id}`}>
              {article.title}
            </Link>
          </p>
        })}
      </div>
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
