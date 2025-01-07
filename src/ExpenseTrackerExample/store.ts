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



const useStore = create<Store>((set)=>({
    transaction: [],
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

export default useStore;
