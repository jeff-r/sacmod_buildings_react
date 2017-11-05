import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Architects from './architects/Architects';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Architects />, document.getElementById('root'));
registerServiceWorker();
