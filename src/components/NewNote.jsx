import React, { useState } from 'react'

const NewNote = () => {
  const [newText, setNewText] = useState('');

  return (
    <div>
      <textarea>TEXT</textarea>
    </div>
  )
}

export default NewNote