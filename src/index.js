import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './containers/App';

import './index.css';
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, change unregister() to register() below. 
serviceWorker.unregister();
