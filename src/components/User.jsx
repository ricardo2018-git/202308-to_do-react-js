import React from 'react'

export default function User(props){
    return(
        <>
            <div className='user-container'>
                Nome: <strong>{props.user.firstName} {props.user.lastName}</strong>
            </div>
        </>
    )
}