import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import createStore from '../Common/Store/'
import createRoutes from '../Common/Router';

console.log('hello')
const store = createStore();
const routes = createRoutes(store);

ReactDOM.render(
<Provider store={ store }>
	<Router history={ browserHistory }>
        { routes }
    </Router>
</Provider>, document.getElementById('root'))
