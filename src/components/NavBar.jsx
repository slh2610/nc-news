import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = ({ user }) => {
  return (
    <nav>
      <Link to="/articles">Home</Link>
      {" | "}
      <Link to="/coding/articles">Coding</Link>
      {" | "}
      <Link to="/cooking/articles">Cooking</Link>
      {" | "}
      <Link to="/football/articles">Football</Link>
      {" | "}
      <Link to="/logout">Logout</Link>
      {" | "}
      <Link to="/login">Login</Link>
      {" | "}
      {Array.isArray(user) && <Link to="/post-article">Create New Article</Link>}
    </nav>
  )
}

export default NavBar