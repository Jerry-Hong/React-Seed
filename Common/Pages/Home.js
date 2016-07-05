import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCount, subCount } from '../Reducers/home/index.js';
import styles from './Home.scss';

class Home extends Component {
	render() {
		const { homeCount, addCount, subCount } = this.props;
		return (
			<div>
				<h1 className={ styles.test }>Home { homeCount }</h1>
				<button onClick={ addCount }>+1</button>
				<button onClick={ subCount }>-1</button>
			</div>
		);
	}
}

export default connect(state => ({ homeCount: state.home }), 
{ addCount, subCount })(Home);
