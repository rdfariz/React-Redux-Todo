import React, { Component } from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'
import { toggleTodo } from '../actions'

const Todos = ({todos, dispatch}) => (
    <ul>
        {
            todos.map((todo, index)=>{
                return <Todo key={todo.id} onClick={()=>dispatch(toggleTodo(todo.id))} {...todo} />
            })
        }
    </ul>

)

const mapStateToProps = state => (
    {
        todos: state
    }
)

export default connect(mapStateToProps)(Todos)