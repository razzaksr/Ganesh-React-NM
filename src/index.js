import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Welcome to react development</h1>
    <button className='col-lg-2 col-md-6 col-12 btn btn-outline-primary'>alpha</button>
    <button className='btn btn-outline-danger'>beta</button>
    {/* <button className='btn btn-outline-success'>cosmo</button> */}
    {/* <button className='btn btn-outline-dark'>delta</button> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
