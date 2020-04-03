const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
            break;
        case "TOGGLE_TODO":
            return state.map(el=> (el.id == action.id) ? {...el, completed: !el.completed} : el)
            break;
        default:
            return state
            break;
    }
}

export default todos