/* rfce */

import { GlobalProvider } from './context/GlobalState';
import Header from './components/header/Header';
import Balance from './components/Balance';
import TransactionForm from './components/transactions/TransactionForm';
import TransactionList from './components/transactions/TransactionList';
import IncomeExpenses from './components/IncomeExpenses';

function App() {
  return (
    <>
    
    <GlobalProvider>
    <Header />  
      <div className='globalCSS'>
            <div className='balance'>
                  <IncomeExpenses />
                  <Balance />
                  <TransactionForm />
            </div>

            <div className='transactions'>
            <TransactionList />
            </div>   
      </div>
    </GlobalProvider>
    </>
  );
}

export default App;

