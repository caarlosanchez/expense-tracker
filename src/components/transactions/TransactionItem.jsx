import { UseGlobalState } from "../../context/GlobalState";



const TransactionItem = ({transaction}) => {

    const { deleteTransaction } = UseGlobalState();
  return (
    <li  className="transactionItem">
    <p>{transaction.description}</p>
    <span>{transaction.amount}</span>
    <button onClick={()=>{
        deleteTransaction(transaction.id)
    }}>x</button>
</li>
  )
}

export default TransactionItem;
