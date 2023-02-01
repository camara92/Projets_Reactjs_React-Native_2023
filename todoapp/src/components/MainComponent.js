import React, { Component } from 'react'
import Todo from './Todo'
import { TODO } from '../shared/faire'
import AddTodo from './FormComponent'


export default class MainComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todo: TODO,
            do: []
        }
        this.toggleTodo = this.toggleTodo.bind(this)
        this.addTodo = this.addTodo.bind(this)
    }

    toggleTodo(todoId) {

        if (this.state.do.some(id => id === todoId)) {
            this.setState({
                do: this.state.do.filter(id => id !== todoId)
                // filter va prendre tous les elements du tab et si l'element existe on peut pouvoir le supprimer 
            })
        } else {
            // si id ne pas on le met dans le tableau 
            this.setState({
                do: this.state.do.concat(todoId)

            })
        }
    }
// add todo

addTodo(purpose, text){

    const newTask = {
        id: this.state.todo.length,
        purpose: purpose,
        isDo: false,
        text: text

    }
    this.setState( {todo: this.state.todo.concat(newTask)} )

}

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-12'>

                        <Todo liste={this.state.todo} toggleTodo={this.toggleTodo} do={this.state.do} />
                    </div>
                    <div className='col-md-8 col-12'>

                        <AddTodo addTodo ={this.addTodo } />
                    </div>
                </div>
            </div>
        )
    }
}
