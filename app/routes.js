import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import About from './containers/About';
import Home from './containers/Home';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="/about" component={About} />
	</Route>
);
