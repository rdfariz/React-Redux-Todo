let nextTodoId = 0

export const addTodo = text => ({
    type: "ADD_TODO",
    id: nextTodoId++,
    text //Equals to text: text
})

export const toggleTodo = id => ({
    type: "TOGGLE_TODO",
    id //Equals to id: id
})

export const setFilter = filter => ({
    type: "SET_FILTER",
    filter
})