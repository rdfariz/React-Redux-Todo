import React from 'react'

const Footer = ({action})=>(
    <div>
        <span>Filter by </span>
        <button onClick={()=>action("ALL")}>ALL</button>
        <button onClick={()=>action("COMPLETED")}>COMPLETED</button>
        <button onClick={()=>action("ACTIVE")}>ACTIVE</button>
    </div>
)

export default Footer