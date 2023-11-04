import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface CategoryModalInput {
  category_name: string;
  category_slug: string;
}

export interface ValidationError {
  category_name_error: string;
}

export interface CategoryModalState {
  isOpen: boolean;
  categoryInput: CategoryModalInput;
  validationError: ValidationError;
}

export interface CategoryModalAction {
  openModal: () => void;
  closeModal: () => void;
  resetInput: () => void;
  setValidationError: (error: ValidationError) => void;
  handleCategoryInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useCategoryModalStore = create<
  CategoryModalState & CategoryModalAction
>()(
  devtools(
    (set) => ({
      isOpen: false,
      validationError: {
        category_name_error: "",
      },
      categoryInput: {
        category_name: "",
        category_slug: "",
      },
      openModal: () => set({ isOpen: true }),
      setValidationError: ({ category_name_error }) => {
        set((state) => ({
          ...state,
          validationError: { category_name_error },
        }));
      },
      resetInput: () =>
        set((state) => ({
          ...state,
          categoryInput: {
            ...state.categoryInput,
            category_name: "",
            category_slug: "",
          },
        })),
      closeModal: () =>
        set((state) => ({
          ...state,
          isOpen: false,
          validationError: {
            category_name_error: "",
          },
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
