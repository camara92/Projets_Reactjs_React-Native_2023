import React, { Component } from 'react'
import './App.css';
import AtlasReadingComponent from './component/AtlasReading';

import MeditationComponent from './component/AtlasReading';
import Navbar from './navbar/header';
import { VERSETS } from './shared/data';


class  App  extends Component  {

constructor(props) {

super(props);
// etat 
this.state = {
  titreSelectionne : null
}
this.selectionneMeditation = this.selectionneMeditation.bind(this)

}

selectionneMeditation(verset){
  this.setState({
    titreSelectionne : verset.libele
  })
}

render() {


  return (
    <div className='container '>
      <Navbar />
      <br></br>
      <div className='row'>
        <div className='col-4' id='divTitres'>

        {VERSETS.map((v)=>{
        return (<AtlasReadingComponent verset={v}  click = {this.selectionneMeditation }  />)
      })}

        </div>
        <div className='col-8 mt-3' id='divLibele' >
          <FLibele  libele = {this.state.titreSelectionne } />
        </div>
      </div>
    
      {/* <AtlasReadingComponent verset = {VERSETS[0]}  /> */}
    </div>
  );
}
}

function FLibele(props){
  return(
    <p className='text-cent'> {props.libele } </p>
  )
}
export default App;
