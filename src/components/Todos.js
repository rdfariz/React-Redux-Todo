import React, { Component } from 'react'
import Todo from './Todo'

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

export default Todos