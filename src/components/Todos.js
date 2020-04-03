import React, { Component } from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'


class Todos extends Component {
    toggleTodo() {
        
    }
    render() {
        // const todos = ["buku", "mouse", "baju"]

        const todoList = this.props.todos.map((todo, index)=>{
            return <Todo key={todo.id} onClick={()=>this.toggleTodo(todo.id)} {...todo} />
        })

        return(
            <ul>
                {todoList}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state
    }
}

export default connect(mapStateToProps)(Todos)