import React from 'react'

function Header(props) {
    // props is an object  
    //  {
    // title: blogTitle
    //  }
    return (
        <h1>{props.title}</h1>
    )
}

export default Header