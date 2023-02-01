import React, { Component } from 'react'
import Todo from './Todo'
import { TODO } from '../shared/faire'
export default class MainComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            todo : TODO, 
            do: []
        }
        this.toggleTodo = this.toggleTodo.bind(this)
    }

    toggleTodo (todoId){

        if(this.state.do.some(id=> id===todoId)){
            this.setState({
                do: this.state.do.filter(id=>id !==todoId)
                // filter va prendre tous les elements du tab et si l'element existe on peut pouvoir le supprimer 
            })
        }else{
            // si id ne pas on le met dans le tableau 
            this.setState({
                do: this.state.do.concat(todoId)

            })
        }
    }


  render() {
    return (
      <div className='container'>
        <Todo liste = { this.state.todo  }  toggleTodo = {this.toggleTodo} do= {this.state.do } />
      </div>
    )
  }
}
