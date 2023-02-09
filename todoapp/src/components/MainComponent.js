import React, { Component } from 'react'
import Todo from './Todo'
import AddTodo from './FormComponent'
import { connect } from 'react-redux'
import {addTodo, toggleTodo } from '../redux/ActionCreator'
// connect permet de connecter le constant au redux 

const mapStateToProps = state => {
    return({
        todo: state.Todo
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        addTodo: (purpose, text)=> dispatch(addTodo(purpose, text)), 
        toggleTodo : (id)=>dispatch(toggleTodo(id))

    })
}
class MainComponent extends Component {
   

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-12'>

                        <Todo liste={this.props.todo} toggleTodo = {this.props.toggleTodo } />
                    </div>
                    <div className='col-md-8 col-12'>

                        <AddTodo addTodo ={this.props.addTodo } />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)