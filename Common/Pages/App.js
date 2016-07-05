import React, { Component } from 'react';

export default class App extends Component {
	render() {
		return (
			<div>
				{ /* 把固定的版面放這裡  */}
				{ this.props.children }
			</div>
		);
	}
}
