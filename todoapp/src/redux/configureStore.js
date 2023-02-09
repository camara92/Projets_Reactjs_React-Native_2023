// import {createStore} from 'reduxjs/toolkit'
import {createStore, combineReducers} from 'redux'
import { Filters } from './filterRedux'
import { todoRedux, initialState } from './todoRedux'


// combinreducer : docs 

export const ConfigureStore = ()=> {
    const store = createStore(
  
    
        combineReducers({
                Todo : todoRedux, 
                Filters: Filters
        })
    
        
    )
    return store
}