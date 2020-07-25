import React from 'react'
import moment from 'moment'
import { NavLink } from 'react-router-dom'

const Avatar = ({avatars}) => {

  return (
    <li>
        {avatars && avatars.map(avatar =>{
            return (
                
                <NavLink to='/' className="btn btn-floating pink lighten-1" >
                     {avatar.initials}
                </NavLink>
                    
                
            )
        })}
        
    </li>
  )
}

export default Avatar