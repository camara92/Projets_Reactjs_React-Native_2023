import React from 'react'
// import { TODO } from '../shared/faire'


function Todo(props ) {

    return (
      <div>
        <ul className='list-unstyled'>
            {
            props.liste.map((t)=>{
              
                    // verif si id es dans tab
                return(
                
                <li className='border mt-2 p-2 barrer' key={t.id}  onClick = {()=> props.toggleTodo(t.id)}>
                    
                     <strong> {t.purpose} </strong>  {t.text} 
                     
                </li>)
              
                   

             

            })
            
            }
        </ul>
      </div>
    )
  }


  export default Todo; 

//   au click on barre la liste 