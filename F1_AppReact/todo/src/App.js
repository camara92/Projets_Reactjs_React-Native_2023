
import './App.css';
import BonjourComponent from './component/BonjourComponent';
import Navbar from './navbar/header';


function App(props) {

  return (
    <div className=''>

      {/* header  */}
      <Navbar />


      <BonjourComponent presentation={props.tableau[0]} gras={true} />
      <BonjourComponent presentation={props.tableau[1]} gras={false} />
      <BonjourComponent presentation={props.tableau[2]} gras={true} />



    </div>
  );
}

export default App;
