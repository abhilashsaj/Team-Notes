import React, { Component } from 'react'
import NoteList from '../notes/NoteList'
import Notifications from './Notifications'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    const { notes } = this.props;
    console.log(this.props)
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <NoteList notes={notes}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    notes: state.note.notes
  }
}

export default connect(mapStateToProps)(Dashboard)