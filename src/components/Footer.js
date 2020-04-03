import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions'

const Footer = ({action})=>(
    <div>
        <span>Filter by </span>
        <button onClick={()=>action("ALL")}>ALL</button>
        <button onClick={()=>action("COMPLETED")}>COMPLETED</button>
        <button onClick={()=>action("ACTIVE")}>ACTIVE</button>
    </div>
)

const mapDispatchToProps = dispatch => ({
    action: type => dispatch(setFilter(type))
})

export default connect(null, mapDispatchToProps)(Footer)