import { create } from "zustand";

export interface DeleteConfirmationModalState {
  isOpen: boolean;
  category_id: string;
}

export interface DeleteConfirmationModalAction {
  onClose: () => void;
  onOpen: ({ category_id }: { category_id: string }) => void;
}

const useDeleteConfirmationModal = create<
  DeleteConfirmationModalState & DeleteConfirmationModalAction
>()((set) => ({
  isOpen: false,
  category_id: "",
  onClose: () => set({ isOpen: false }),
  onOpen: ({ category_id }) => set({ isOpen: true, category_id }),
}));

export default useDeleteConfirmationModal;
