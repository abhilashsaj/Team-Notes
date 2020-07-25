import React from 'react'
import moment from 'moment'
const NoteSummary = ({note}) => {

  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{note.title}</span>
        <p>Posted by {note.authorFirstName} {note.authorLastName}</p>
        <p className="grey-text">{moment(note.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default NoteSummary