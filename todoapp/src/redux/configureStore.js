// import {createStore} from 'reduxjs/toolkit'
import {createStore} from 'redux'

import { Reducer, initialState } from './Reducer'

export const ConfigureStore = ()=> {
    const store = createStore(
        //reducer
       Reducer, 
        // initialiseState
        initialState
        
    )
    return store
}