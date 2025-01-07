import { Button } from '../components/ui/button';
import store, { Transaction } from './store';

const ExpenseTracker = () => {
  const { transaction, addTransaction, deleteTransaction } = store();
  const newTransaction: Transaction = {
    id: Date.now(),
    text: 'Shoes',
    amount: -50,
  };
  return (
    <div className='bg-red-100 flex flex-col items-center justify-center h-screen space-y-4'>
      <h1 className='text-xl font-extrabold text-center text-gray-800'>
        Expense Tracker
      </h1>
      <ul className='space-y-2'>
        {transaction.map((t) => (
          <li
            key={t.id}
            className='border border-gray-400 rounded py-2 px-4 flex justify-between'
          >
            <h2>{t.text} </h2>
            <p>{t.amount}</p>
            <span
              className='cursor-pointer border border-green-500 rounded-full px-2'
              onClick={() => deleteTransaction(t.id)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
      <Button variant='outline' onClick={() => addTransaction(newTransaction)}>
        Add Transaction
      </Button>
    </div>
  );
};

export default ExpenseTracker;
