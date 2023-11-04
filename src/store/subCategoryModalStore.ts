import { Category } from "@/components/dashboard/category/CategoryList";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface SubCategoryModalState {
  parentCategory: Category | null;
  isOpen: boolean;
  subCategoryInput: SubCategoryModalInput;
}

interface SubCategoryModalAction {
  openModal: (parentCategory: Category) => void;
  closeModal: () => void;
  resetInput: () => void;
  handleSubCategoryInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SubCategoryModalInput {
  sub_category_name: string;
  sub_category_slug: string;
}

const useSubCategoryModalStore = create<
  SubCategoryModalState & SubCategoryModalAction
>()(
  devtools(
    (set) => ({
      parentCategory: null,

      subCategoryInput: {
        sub_category_name: "",
        sub_category_slug: "",
      },

      isOpen: false,

      resetInput: () =>
        set((state) => ({
          ...state,
          subCategoryInput: {
            ...state.subCategoryInput,
            sub_category_name: "",
            sub_category_slug: "",
          },
        })),

      closeModal: () => {
        set((state) => ({
          ...state,
          isOpen: false,
          subCategoryInput: {
            ...state.subCategoryInput,
            sub_category_name: "",
            sub_category_slug: "",
          },
        }));
      },

      openModal: (parentCategory) =>
        set((state) => ({ isOpen: true, parentCategory })),

      handleSubCategoryInput: (e: React.ChangeEvent<HTMLInputElement>) => {
        set((state) => ({
          ...state,
          subCategoryInput: {
            ...state.subCategoryInput,
            [e.target.name]: e.target.value,
          },
        }));
      },
    }),
    { name: "subcategory-store" }
  )
);

export default useSubCategoryModalStore;
