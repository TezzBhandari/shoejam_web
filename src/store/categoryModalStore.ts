import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface CategoryModalInput {
  category_name: string;
  category_slug: string;
}
export interface CategoryModalState {
  isOpen: boolean;
  categoryInput: CategoryModalInput;
}

export interface CategoryModalAction {
  openModal: () => void;
  closeModal: () => void;
  handleCategoryInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useCategoryModalStore = create<
  CategoryModalState & CategoryModalAction
>()(
  devtools(
    (set) => ({
      isOpen: false,
      categoryInput: {
        category_name: "",
        category_slug: "",
      },
      openModal: () => set({ isOpen: true }),
      closeModal: () =>
        set((state) => ({
          ...state,
          isOpen: false,
          categoryInput: {
            ...state.categoryInput,
            category_name: "",
            category_slug: "",
          },
        })),
      handleCategoryInput: (e: React.ChangeEvent<HTMLInputElement>) => {
        set((state) => ({
          ...state,
          categoryInput: {
            ...state.categoryInput,
            [e.target.name]: e.target.value,
          },
        }));
      },
    }),
    {
      name: "category-store",
    }
  )
);

export default useCategoryModalStore;
