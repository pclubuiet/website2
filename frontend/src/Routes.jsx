import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';

class Routes extends Component {
	constructor(props) {
		super(props);
		this.state = { user: null };	// to be used at a later stage.
	}

	render() {
		return (
			<BrowserRouter>
				<Route path={'/home/'} exact component={Home} />
			</BrowserRouter>
		);
	}
}

export default Routes;
