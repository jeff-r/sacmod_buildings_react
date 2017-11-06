import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Architects from './architects/Architects';
import Library from './library/Library';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Library />, document.getElementById('root'));
registerServiceWorker();
