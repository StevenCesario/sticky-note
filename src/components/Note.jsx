import React from 'react'

const Note = ({ text }) => {
  return (
    <textarea>
      {text}
    </textarea>
  )
}

export default Note