import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({dispatch}) => {
    let input

    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            if (!input.value.trim()) return alert("Inputan tidak boleh kosong!")
            dispatch(addTodo(input.value))
            input.value = ""
        }}>
            <input ref={node => input = node} placeholder="Masukkan Data Todo"></input>        
            <button type="submit">+ Add Todo</button>
        </form>
    )
}

// Using Connect for connection Dispatch with Reducer
export default connect()(AddTodo)