import React, { Component } from 'react'
import { VERSETS } from '../shared/data'

export default class MeditationComponent extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
       <p className='mt-3  pTitre' onClick = {()=> this.props.click(this.props.verset) }  key={this.props.verset.id} >
        <strong> {this.props.verset.titre } </strong>  
       
       </p>
      </div>
    )
  }
}
