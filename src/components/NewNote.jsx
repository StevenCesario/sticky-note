import React, { useState } from 'react'

// It'd be cool to pass some sort of isFirstTimeVisit or isFirstNote prop to this component but I just can't get the logic to fully work in the parent component right now. Future quality of life improvement!
const NewNote = ({ onCreate }) => {
  const [newText, setNewText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onCreate(newText);

    setNewText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={newText} onChange={(e) => setNewText(e.target.value)}></textarea>
      {/* <p>newText: {newText}</p> */}
      <br />
      <input type='submit' value='Create note!' />
    </form >
  )
}

export default NewNote