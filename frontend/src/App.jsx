import { useState } from 'react';

import './App.css';
import Envoiemessage from './Envoiemessage';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App d-flex flex-column justify-content-center align-items-center p-3'>
			<Envoiemessage />
		</div>
	);
}

export default App;
