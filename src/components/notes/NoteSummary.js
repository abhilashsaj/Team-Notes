import React from 'react'

const NoteSummary = ({note}) => {
  console.log(note)
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{note.title}</span>
        <p>Hope you have a good day</p>
        <p className="grey-text">24th July, 2am</p>
      </div>
    </div>
  )
}

export default NoteSummary