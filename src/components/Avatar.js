import React from 'react'

function Avatar(props) {
    const Avatarstyle={
        height:props.Size,
        width:props.Size,
        borderRadius:"50%",
        margin:"5px",
        padding:"10px",
        boxSizing:"borderBox"
    }
    const Imagestyle={
        width:"100%",
        height:"100%",
        objectFit:"fill",
        borderRadius:"50%"
        
    }
    return (
        <div className="Avatar__Container" style={Avatarstyle}>
          <img className="Avatar__image" style={Imagestyle} alt="user Avatar" src="https://avatars.githubusercontent.com/u/48353856?v=4"></img>
            
        </div>
    )
}

export default Avatar
