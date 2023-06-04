import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

import storeSatyam from './Todo/ToDo-React-React/CreateStoreRedux';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  //<React.StrictMode>
    <Provider store={storeSatyam} > <App />
    </Provider >

 // </React.StrictMode>
);

reportWebVitals();
