import React, { Component } from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'
import { toggleTodo } from '../actions'

const Todos = ({store, action}) => {
    let todos = null;
    if (store.todos.length > 0) {
        todos = store.todos.map((todo)=>
            <Todo key={todo.id} onClick={()=>action.toggleTodo(todo.id)} {...todo} />
        )
    }else if (store.todos.length <= 0 && store.filter != "ALL") {
        todos = <p>Belum ada Todos {store.filter.toLowerCase()}</p>
    }else {
        todos = <p>Belum ada Todos</p>
    }

    return (
        <ul>{todos}</ul>
    )
}

function getTodos(todos, filter) {
    if (filter == "ALL") {
        return todos
    }else if(filter == "COMPLETED") {
        return todos.filter(el=>el.completed)
    }else if(filter == "ACTIVE") {
        return todos.filter(el=>!el.completed)
    }else {
        return todos
    }
}

const mapDispatchToProps = dispatch => ({
    action: {
        toggleTodo: id => dispatch(toggleTodo(id))
    }
})
const mapStateToProps = state => ({
    store: {
        todos: getTodos(state.todos, state.filter),
        filter: state.filter
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)