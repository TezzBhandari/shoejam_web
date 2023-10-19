import { create } from "zustand";
import { devtools } from "zustand/middleware";
export interface CategoryModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useCategoryModalStore = create<CategoryModalState>()(
  devtools(
    (set) => ({
      isOpen: false,
      openModal: () => set({ isOpen: true }),
      closeModal: () => set({ isOpen: false }),
    }),
    {
      name: "category-store",
    }
  )
);

export default useCategoryModalStore;
