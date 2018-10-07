import React from 'react'

const DeleteComment = ({ id, deleteComment }) => {
  return (
    < button class="deleteComment" onClick={() => deleteComment(id)} >
      <span role="img" aria-label="wastebasket emoji">🗑️</span>
    </button >
  )

}

export default DeleteComment