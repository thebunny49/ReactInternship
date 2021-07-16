import React from 'react'

import {Main} from '../Card/Card'
export const CardList = props => (
  
    <div className="card-list">
        {props.users.map(user =>(
            <Main key={user.id} user={user} />
        ))}
    </div>
   

)
