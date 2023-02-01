import React, { Component } from 'react'
import { TODO } from '../shared/faire'


function Todo(props ) {

    return (
      <div>
        <ul className='list-unstyled'>
            {
            props.liste.map((t)=>{
                if(props.do.some(id=>t.id)){
                    // verif si id es dans tab
                return(
                
                <li className='border mt-2 p-2 barrer' key={t.id} >
                    
                     <strong> {t.purpose} </strong>  {t.text} 
                     
                </li>)
                }else{
                    return(
                
                        <li className='border mt-2 p-2 nonbarrer' key={t.id} >
                            
                             <strong> {t.purpose} </strong>  {t.text} 
                             
                        </li>)

                }

            })
            
            }
        </ul>
      </div>
    )
  }


  export default Todo; 

//   au click on barre la liste 