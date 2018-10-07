import React from 'react'

const Logout = ({ logout }) => {
  return (
    <form onSubmit={logout}>
      <button class="logout">Logout</button>
    </form >
  )
}

export default Logout