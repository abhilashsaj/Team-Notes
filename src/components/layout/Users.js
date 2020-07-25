import React from 'react';

import Avatar from './Avatar'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { NavLink } from 'react-router-dom'


class Users extends React.Component {
   
  render() {
    const {users} = this.props
    console.log(users);
    return (
      <li>
            {users && users.map(user =>{
                return (
                    
                    <a  className="btn btn-floating tooltipped" data-position="bottom" data-tooltip="I am a tooltip" key={user.id} style={{backgroundColor: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)}}>
                        {user.initials}
                    </a>
                        
                    
                )
            })}
            
        </li>
    );  
  }
} 

const mapStateToProps = (state) => {
  // //console.log(state)
  return {
      users: state.firestore.ordered.users
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      { collection: 'users'}
  ])
)(Users)

