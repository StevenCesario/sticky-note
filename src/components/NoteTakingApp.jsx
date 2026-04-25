import { useEffect, useState } from "react"
import Note from "./Note"
import NewNote from "./NewNote";

const NoteTakingApp = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Check localStorage for notes
    if (localStorage.getItem('user-notes') !== null) { // 'user-notes' will be an array, yes, but we don't use JSON.parse here, right? Since we're unsure whether we were are getting something out of localStorage to begin with?
      // If found, set the initial state
      console.log(localStorage.getItem('user-notes'))
      setNotes(JSON.parse(localStorage.getItem('user-notes'))) // HERE we use JSON.parse! This would make sense
    }
  }, [])

  // A second useEffect to listen to changes in the notes state array. We don't bake localStorage sync into the create and edit notes functions. That feels intuitvely wrong
  useEffect(() => {
    // AHH!! The lesson that I learned yesterday! Check the inital use case! A useEffect will ALWAYS fire on mount!
    if (localStorage.getItem('user-notes') === null) return // If there is nothing in localStorage on mount, return early
    // But now there is no localStorage initiation at all. Where do I put that logic? It's when the first note is created, isn't it?

    localStorage.setItem('user-notes', JSON.stringify(notes)); // This... is it, right?
  }, [notes])

  function createNote(text) {
    setNotes([...notes, { id: Date.now(), text: text }]); // This line is correct, isn't it?
    console.log('notes:', notes) // The notes array... is not set at this point?? What?? What am I missing here?

    if (notes.length === 1) localStorage.setItem('user-notes', JSON.stringify(notes)); // This feels... a bit ugly and wrong but it works for now.
  }

  function editNote(id, text) {
    setNotes(notes.map(note => note.id === id ? {...note, text: text} : note))
  }

  return (
    <div className="main-container">
      <h1>Note Taking App</h1>
      {notes.length === 0 ? (
        <>
          <h2>Create your first note below!</h2>
          <NewNote onCreate={createNote} />
        </>) : (
        <>
          {notes.map(note => <Note key={note.id} note={note} onEdit={editNote} />)}
        </>
      )}
    </div>
  )
}

export default NoteTakingApp