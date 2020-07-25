import React, { Component } from 'react'
import NoteList from '../notes/NoteList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

class Dashboard extends Component {
  render() {
    const { notes, auth, notifications  } = this.props;

    if (!auth.uid) return <Redirect to='/signin' /> 
    var db = firebase.firestore();
    db.collection("users").doc(auth.uid).update({status: "active"}).then(function() {
      console.log("Document successfully updated!");
      })
      .catch(function(error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
      });
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <NoteList notes={notes}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    notes: state.firestore.ordered.notes,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notes' , orderBy: ['createdAt', 'desc']},
    { collection: 'notifications', limit: 6, orderBy: ['time', 'desc']}
  ])
)(Dashboard)