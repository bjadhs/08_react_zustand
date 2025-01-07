import { useState } from 'react';
import { Button } from '../components/ui/button';
import useStore, { Transaction } from './store';

const ExpenseTracker = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  // const [transactions, setTransaction] = useState<Transaction[]>([]);

  const { transaction, addTransaction, deleteTransaction } = useStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      text: name,
      amount: +amount,
    };
    if (name === '' || amount === 0) return;
    addTransaction(newTransaction);
    setTotal(amount + total);
    setName('');
    setAmount(0);
  };

  return (
    <div className='bg-red-100 flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-extrabold text-center text-gray-800 py-4 underline'>
        Expense Tracker
      </h1>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-2 space-y-2 border-2 border-gray-400 rounded-md bg-orange-200 p-4 h-1/2'
      >
        <div className='flex flex-col justify-center align-center space-y-2'>
          <input
            type='text'
            placeholder='Expense here...'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='number'
            placeholder='Amount here...'
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
          />
        </div>
        {transaction.length === 0 ? (
          <h1 className='p-4 text-orange-700'>No transactions</h1>
        ) : (
          <ul className='space-y-2 p-4'>
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
        )}
        <div></div>
        <Button
          type='submit'
          variant='outline'
          className='col-span-2 w-full self-end'
        >
          Add Transaction
        </Button>
        <h2 className='bg-orange-300 border-t-gray-500 rounded-md self-end p-2'>
          Total Expense: ${total}{' '}
        </h2>
      </form>
    </div>
  );
};

export default ExpenseTracker;
