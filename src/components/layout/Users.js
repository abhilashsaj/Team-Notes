import React from 'react';

import Avatar from './Avatar'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { NavLink } from 'react-router-dom'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    root: {
      color: theme.palette.text.primary,
    },
  }));
function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    if(a!=null && b!=null){
        const item1 = a.title.toUpperCase();
    const item2 = b.title.toUpperCase();
  
    let comparison = 0;
    if (item1 > item2) {
      comparison = 1;
    } else if (item1 < item2) {
      comparison = -1;
    }
    return comparison;
    }
    
}

  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);
  
class Users extends React.Component {
   
  render() {
    var {users} = this.props
    var activeUsers=[]
    console.log(users);
    if(users!=null){
        var i;
            for (i = 0; i < users.length; i++) { 
                if(users[i].status==='active'){
                    //console.log(products[i])
                    activeUsers.push(users[i])
                }
            }
        
        users = activeUsers
    }

    if(users!=null && users.length<4){
        return (
        
            <li>
                {users && users.map(user =>{
                    return (
                        
                        
                        
                        <HtmlTooltip key={user.id}
                            title={
                            <React.Fragment>
                                <Typography color="inherit">{user.firstName} {user.lastName}</Typography>
                                <b>{user.role}</b> 
                            </React.Fragment>
                            }
                        >
                            <button className="btn btn-floating"  style={{border:'white 2px solid',marginLeft:'-8px',backgroundColor: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)}}>{user.initials}</button>
                        </HtmlTooltip>
                        
                    )
                })}
                
            </li>
        );
        
    }
    else if(users!=null){
        return(
            <li>
                <HtmlTooltip key={users[0].id}
                    title={
                    <React.Fragment>
                        
                        <Typography color="inherit">{users[0].firstName} {users[0].lastName}</Typography>
                        <b>{users[0].role}</b> 
                    </React.Fragment>
                    }
                >
                    <button className="btn btn-floating"  style={{backgroundColor: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)}}>{users[0].initials}</button>
                </HtmlTooltip>
                <HtmlTooltip key={users[1].id}
                    title={
                    <React.Fragment>
                        <Typography color="inherit">{users[1].firstName} {users[1].lastName}</Typography>
                        <b>{users[1].role}</b> 
                    </React.Fragment>
                    }
                >
                    <button className="btn btn-floating"  style={{backgroundColor: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)}}>{users[1].initials}</button>
                </HtmlTooltip>
                <HtmlTooltip key={users[2].id}
                    title={
                    <React.Fragment>
                        <Typography color="inherit">{users[2].firstName} {users[2].lastName}</Typography>
                        <b>{users[2].role}</b> 
                    </React.Fragment>
                    }
                >
                    <button className="btn btn-floating"  style={{backgroundColor: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)}}>{users[2].initials}</button>
                </HtmlTooltip>
                
                <HtmlTooltip key={users[2].id}
                            title={
                            <React.Fragment>
                                {/* <Typography color="inherit">{JSON.stringify(obj)} {users[0].lastName}: <b>{users[0].role}</b> </Typography> */}
                                {users && users.map(user =>{
                                    return (
                                        <Typography color="inherit">{user.firstName} {user.lastName}:<b>{user.role}</b> </Typography>
                                    )
                                })}
                            </React.Fragment>
                            }
                        >
                            <button className="btn btn-floating"  style={{border:'white 2px solid',marginLeft:'-8px',backgroundColor: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)}}>+{users.length-2}</button>
                </HtmlTooltip>
            </li>
        )
    
    }else{
        return(
            <li></li>

        )
    }
      
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

{/* <a  className="btn btn-floating"  key={user.id} style={{backgroundColor: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)}}>
                        {user.initials}
                    </a> */}