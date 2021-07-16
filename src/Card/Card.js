import React from 'react'

export const Main = props => (
    
    
    <div className="card-container">
    <div className="profile-card" >
                <div className="profile-content">
                    <div className="profile-image">
                        <img src={props.user.picture} alt="first user" />
                    </div>
                    <div className="desc">
                        <h2>{props.user.firstName} {props.user.lastName}</h2>
                        <p>{props.user.email} </p>
                    </div>
                    
             
            </div>
    
    
    </div>
    </div>
)
