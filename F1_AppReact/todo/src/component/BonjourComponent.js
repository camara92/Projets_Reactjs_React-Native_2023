import React from 'react'

function BonjourComponent() {

  const data =[
    {
      prenom: 'Daouda', 
      nom: 'CAMARA'
    },
    {
      prenom: 'Daniel', 
      nom: 'Caramoko'
    },
    {
      prenom: 'Steve', 
      nom: 'Albert'
    }
  ]
  
    return (
      <div className='container'> 

        <h1>Bonjour  {data[0].nom } {data[0].prenom }</h1>
      </div>
    )
  
}




export default BonjourComponent; 

