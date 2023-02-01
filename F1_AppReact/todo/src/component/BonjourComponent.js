import React, {Component} from 'react'



 class BonjourComponent extends Component {

tableau =[
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
  constructor(props){
    super(props)
    this.state= {
      gras: true
    }
  
    this.toggleGras= this.toggleGras.bind(this)
  }
  toggleGras(){
    this.setState(
      {
      gras: !this.state.gras
    } 
    )
  }



  
  render() {
    return (
      <div className='container my-3'> 
      <br></br>

        {/* <h1>Bonjour  {tableau[0].nom } {tableau[0].prenom }</h1> */}
     
        <p className='mt-4' style={{fontWeight: this.props.gras ? 'bold' : 'normal'}}  onClick ={this.toggleGras}>
      Bonjour  {this.props.presentation.nom } {this.props.presentation.prenom }

      </p>
      </div>
    )
  
}


 }

export default BonjourComponent; 

