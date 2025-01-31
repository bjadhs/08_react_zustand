import {create} from 'zustand';

interface CounterProps {
    count: number,
    inc: ()=>void,
    dec: ()=>void
}

export const useStore = create<CounterProps>((set)=>({
    count: 1,
    inc: () => set((state)=>({
        count : state.count+1
    })),
    dec: () => set((state)=>({
        count : state.count-1
    }))
}))