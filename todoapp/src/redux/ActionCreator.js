import * as actionTypes from "./ActionType";

export const addTodo = (purpose, text)=>({

    type: actionTypes.ADD_TODO,
    payload: {
        purpose: purpose,
        text: text
    }

})

export const toggleTodo = (id)=>({
    type: actionTypes.TOGGLE_TODO,
    payload: {id: id}

})