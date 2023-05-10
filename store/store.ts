import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Store = {
    count: number;
}
type Actions = {
    increase: () => void;
    decrease: () => void;
}
// create store
const useStore = create<Store & Actions>()(
    persist(
        (set) => ({
            count: 1,
            increase: () => set((state) => ({ count: state.count + 1 })),
            decrease: () => set((state) => ({count: state.count - 1}))
        }),
        { 
            name: "global", 
            getStorage: () => localStorage
        }
    )
);
export default useStore