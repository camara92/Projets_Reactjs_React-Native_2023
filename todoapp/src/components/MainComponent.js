import React, { Component } from 'react'
import Todo from './Todo'
import { TODO } from '../shared/faire'
export default class MainComponent extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className='container'>
        <Todo liste = {TODO}  />
      </div>
    )
  }
}
