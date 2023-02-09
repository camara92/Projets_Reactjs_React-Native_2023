import { TODO } from "../shared/faire";
import * as actionTypes from "./ActionType";



export const initialState = {
    Todo: TODO
}

export const Reducer = (state = initialState, action) => {
    // return state

    switch (action.type) {
        case actionTypes.ADD_TODO:
            var todo = action.payload
            todo.id = state.Todo.length
            todo.isDo = false
            return {

                
                     Todo: [...(state.Todo), todo]
                
            }

        case actionTypes.TOGGLE_TODO:
            return {
                Todo: state.Todo.map(todo => todo.id === action.payload.id ? {...todo, isDo : !todo.isDo} : todo)
            }
        default : 
        return state
    }






}