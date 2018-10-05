import React from 'react'

const Logout = ({ logout }) => {
  return (
    <form onSubmit={logout}>
      <button>Logout</button>
    </form >
  )
}

export default Logout