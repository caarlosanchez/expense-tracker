
import React from 'react';
import { UseGlobalState } from '../context/GlobalState';

function Balance() {
  const {transactions} = UseGlobalState();

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0)
  

  return (
    <div className='totalBalance'>
      <h3> Your total balance</h3>
      <h1>{total}$</h1>
    </div>
  );
}

export default Balance;
