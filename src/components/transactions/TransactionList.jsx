import { UseGlobalState } from "../../context/GlobalState"
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
    const { transactions } = UseGlobalState();
  return (
    <div className="transactionList">
    <h2>TRANSACTIONS</h2>
    <ul>
        {
            transactions.map(transaction =>(
                <TransactionItem transaction={transaction} key={transaction.id} />
            ))
        }
    </ul>
        
      
    </div>
  )
}

export default TransactionList
