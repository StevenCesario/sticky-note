import { useEffect, useState } from "react"
import Note from "./Note"
import NewNote from "./NewNote";

const NoteTakingApp = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Check localStorage for notes
  }, [])

  return (
    <div className="main-container">
      <h1>Note Taking App</h1>
      {notes.map(note => <Note text={note.text} />)}
      {notes.length === 0 &&
        <>
          <h2>Create your first note below!</h2>
          <NewNote />
        </>}
    </div>
  )
}

export default NoteTakingApp