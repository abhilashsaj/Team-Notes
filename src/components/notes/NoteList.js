
import React from 'react'
import NoteSummary from './NoteSummary'
const NoteList = ({notes}) => {
  console.log(notes)
  return (
    <div className="project-list section">
    { notes && notes.map(note => {
        return (
          <NoteSummary note={note} key={note.id} />
        )
      })}  
      
    </div>
  )
}

export default NoteList