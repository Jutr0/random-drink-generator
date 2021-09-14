import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Menu from '../components/Menu';
import Details from './Details/Details';
import Home from './Home';

function Index() {
	return (
		<main className="appContainer">
			<Menu />

			<Router>
				<Switch>
					<Route path="/details/:id" exact component={Details} />
					<Route path="/" exact component={Home} />
				</Switch>
			</Router>
			<Router basename="/random-drink-generator">
				<Switch>
					<Route path="/details/:id" exact component={Details} />
					<Route path="/" exact component={Home} />
				</Switch>
			</Router>
		</main>
	);
}

export default Index;
