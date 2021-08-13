import React from 'react'
import "./navbar.styles.css"

interface Navbar {
    title: string,
}

const Navbar:React.FC<Navbar>=(props)=>{
    return(
    <div className="navbar">{props.title}</div>
    );
}

export default Navbar