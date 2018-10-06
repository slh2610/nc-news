import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = ({ user }) => {
  return (
    <nav>
      <Link to="/articles" className="navLink">Home</Link>
      {" | "}
      <Link to="/coding/articles" className="navLink">Coding</Link>
      {" | "}
      <Link to="/cooking/articles" className="navLink">Cooking</Link>
      {" | "}
      <Link to="/football/articles" className="navLink">Football</Link>
      {" | "}
      <Link to="/logout" className="navLink">Logout</Link>
      {" | "}
      <Link to="/login" className="navLink">Login</Link>
      {" | "}
      {Array.isArray(user) && <Link to="/post-article" className="navLink">Create New Article</Link>}
    </nav>
  )
}

export default NavBar