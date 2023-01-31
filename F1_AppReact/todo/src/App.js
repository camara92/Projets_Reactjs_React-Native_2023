
import './App.css';
import BonjourComponent from './component/BonjourComponent';
import Navbar from './navbar/header';


function App(props) {
const menu = props.tableau.map((p)=> {

  return <BonjourComponent presentation = {p}  key = {p.id} /> 
})
  return (
    <div className=''>

      {/* header  */}
      <Navbar />


      {/* <BonjourComponent presentation={props.tableau[0]} gras={true} />
      <BonjourComponent presentation={props.tableau[1]} gras={false} />
      <BonjourComponent presentation={props.tableau[2]} gras={true} /> */}
      {menu}



    </div>
  );
}

export default App;
