import React, { Component } from 'react';

export default class Envoiemessage extends Component {
	render() {
		return (
			<div>
				<input
					type='text'
					className='Mesenv text-primary form-control'
					placeholder='Votre Message ici'
				></input>
				<button className='btnenv text-primary'> Envoie Message</button>
			</div>
		);
	}
}
