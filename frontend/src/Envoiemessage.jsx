import React, { Component } from 'react';
import AddMessage from './components/AddMessage';

export default class Envoiemessage extends Component {
	render() {
		return (
			<div
				className='container row bg-light shadow-sm p-0'
				style={{ width: '100vw' }}
			>
				<AddMessage />
				<div className='col-sm-6 bg-secondary'></div>
			</div>
		);
	}
}
