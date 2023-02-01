import React, { Component } from 'react'
import { TODO } from '../shared/faire'


function Todo({liste}) {
    return (
      <div>
        <ul className='list-unstyled'>
            {
            liste.map((t)=>{

                return(<li key={t.id}> <strong> {t.purpose} </strong>  {t.text} </li>)

            })
            
            }
        </ul>
      </div>
    )
  }


  export default Todo; 
