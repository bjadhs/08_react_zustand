import {create} from 'zustand';

 export type Transaction = {
    id: number,
    text: string,
    amount: number
}
type Store = {
    transaction: Transaction[],
    addTransaction: (t:Transaction)=>void,
    deleteTransaction: (id:number)=>void,

}

const initialTransactions= [
    {id: 1, text: 'Flower', amount: -20},
    {id: 2, text: 'Salary', amount: 300},
    {id: 3, text: 'Book', amount: -10},
    {id: 4, text: 'Camera', amount: 150}
]

const store = create<Store>((set)=>({
    transaction: initialTransactions,
    addTransaction:(t:Transaction)=>{
        set((state)=>({
            transaction: [...state.transaction, t]
        }));
    },
    deleteTransaction:(id:number)=>{
        set((state)=>({
            transaction: state.transaction.filter((t)=>t.id!==id)
        }))},
}));

export default store;
