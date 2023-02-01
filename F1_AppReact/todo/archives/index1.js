import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const data =[
  {
    prenom: 'Daouda', 
    nom: 'CAMARA',
    id:0
  },
  {
    prenom: 'Daniel', 
    nom: 'Caramoko',
    id:1
  },
  {
    prenom: 'Steve', 
    nom: 'Albert',
    id:2
  },
  {
    prenom: 'Diougoula', 
    nom: 'Albert',
    id:3
  },
  {
    prenom: 'Diallo', 
    nom: 'Albert',
    id:4
  },
  {
    prenom: 'Diallo', 
    nom: 'Albert',
    id:5
  }
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tableau = {data} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
