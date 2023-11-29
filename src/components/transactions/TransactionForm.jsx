

import { useState } from 'react';
import { UseGlobalState } from '../../context/GlobalState';

function TransactionForm() {

  const {addTransaction} = UseGlobalState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
   
    e.preventDefault()
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    })
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
        type="text"
        placeholder='Enter a Description'
        onChange={(e) => setDescription(e.target.value)} 
        className='input1'
        />
        <input type="number"
        step="0.01"
        placeholder='00.00'
        onChange={(e) => setAmount(e.target.value)}
        className='input1'
        />
        
        <button className='button'>Add transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
