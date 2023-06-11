import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyChange = (props) => {
	const { } = useContext(AppContext);

    const [name, setName] = useState('');
    const [action, setAction] = useState('');
		

	
	return (
		<div className='alert alert-secondary'>
            <span>Currencies: </span>
			<input type="text"></input>
		</div>
	);
};

export default CurrencyChange;