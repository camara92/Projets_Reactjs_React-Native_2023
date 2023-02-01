import React, { Component } from 'react'
import { TODO } from '../shared/faire'


export default class Todo extends Component {
  render() {
    return (
      <div>
        <ul className='list-unstyled'>
            {TODO.map((t)=>{
                return(<li key={t.id}> <stron> {t.purpose} </stron>  {t.text} </li>)
            })
            
            }
        </ul>
      </div>
    )
  }
}
