import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import Users from './Users'
import { Redirect } from 'react-router-dom'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var uid
function inactive(){
  
  
  var db = firebase.firestore();

  
  console.log("inactive "+ uid);
  
  return db.collection("users").doc(uid).update({status: "inactive"}).then(function() {
    console.log("Document successfully updated!");
    
    
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
  
}
const SignedInLinks = (props) => {
  uid = props.auth.uid
  return (
    <div>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          {/* <NavLink to='/' className="btn btn-floating pink lighten-1">
            {props.profile.initials}
          </NavLink> */}
          <Users/>
          
        </li>
        <li><NavLink to='/create'>New Note</NavLink></li>
        <li onClick={inactive}><a onClick={props.signOut}>Log Out</a></li>
        {/* <li ><NavLink to='/' className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink></li> */}
      </ul>
      <ul class="sidenav" id="mobile-demo">
      <li>
        
          <Users/>
          
        </li>
        <li><NavLink to='/create'>New Note</NavLink></li>
        <li onClick={inactive}><a onClick={props.signOut}>Log Out</a></li>
        
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)