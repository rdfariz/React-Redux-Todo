import {connect} from 'react-redux'
import { toggleTodo } from '../actions'
import Todos from '../components/Todos'

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