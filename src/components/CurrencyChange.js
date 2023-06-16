import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import "./StyleCurrency.css" ;

const CurrencyChange = () => {
  const {dispatch } = useContext(AppContext);

	const changeCurrency = (val)=>{
			dispatch({
				type: 'CHG_CURRENCY',
				payload: val,
			})
	}
	
   return (
		<div className='alert alert-secondary' style={{backgroundColor: '#94DC99'}}>
        <label style={{marginLeft: '.5rem' , backgroundColor:'#94DC99', color:'black'}} >Currency
            <select name='hover_color' id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{ marginLeft: '1rem' , backgroundColor:'#FFC0CB', color:'white'}}>
                <option style={{color:'black'}} value="£">(£ Pound)</option>
                <option style={{color:'black'}} value="$">($ Dollar)</option>
                <option style={{color:'black'}} value="€">(€ Euro)</option>
                <option style={{color:'black'}} value="₹">(₹ Rupee)</option>
            </select>	
        </label>
      	
    </div>
	);
};

export default CurrencyChange;