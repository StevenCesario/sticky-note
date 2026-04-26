import React from 'react'
import Note from './Note'

const TrashCanModal = ({ notes, onClose }) => {
  return (
    <div className='trash-can-container'>
      <div className="notes-grid">
        {/* {notes.map(note => <Note key={note.id} note={note} onEdit={editNote} onDelete={deleteNote} />)} What goes here? I believe I need to extend the Note props */}
      </div>
      <button type='button' onClick={onClose}>Close</button>
    </div>
  )
}

export default TrashCanModal