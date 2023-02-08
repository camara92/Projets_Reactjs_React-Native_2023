
import './App.css';
import MainComponent from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore()

function App() {
  return (
    // <div className="App">
    <Provider store={store}>


      <MainComponent />
    </Provider>


  );
}

export default App;
