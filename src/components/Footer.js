import React from 'react'
import '../App.css';

const Footer = ({action})=>(
<div>
    <span>Filter by </span>
        <div className="buttons">
        <button onClick={()=>action("ALL")}>ALL</button>
        <button onClick={()=>action("COMPLETED")}>COMPLETED</button>
        <button onClick={()=>action("ACTIVE")}>ACTIVE</button>
        </div>
</div>
)

export default Footer