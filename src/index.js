import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
// import  'leaflet.pm';
// import Z from './js/ZMap2.0';
// import Z from './js/leaflet-ZMap2.1'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


window.L=L;
// window.Z=Z.Z;


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
