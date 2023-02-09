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



export const setFilter = (id)=>{
    switch(id){
        case 0: 
        return ({
            type: actionTypes.SHOW_ALL
        })

        case 1: 
        return ({
            type: actionTypes.SHOW_ACTIVE
        })

        case 2: 
        return ({
            type: actionTypes.SHOW_COMPLETED
        })


        
    }
}