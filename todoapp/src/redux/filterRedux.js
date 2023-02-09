import * as actionTypes from "./ActionType";
import {SHOWS } from "../shared/show";

export const Filters = (state= SHOWS, action)=>{
    switch(action.type){
        case actionTypes.SHOW_ALL : 
        return ({
            all : true, 
            active: false, 
            completed: false 
        })

        case actionTypes.SHOW_COMPLETED : 
        return ({
            all : false, 
            active: false, 
            completed: true 
        })
        case actionTypes.SHOW_ACTIVE : 
        return ({
            all : false, 
            active: true, 
            completed: false 
        })

        default : 
        return state
    }
}