import { create } from "zustand";

import type {
  ProductAction,
  ProductState,
} from "@/app/admin/dashboard/products/types";

const useProductStore = create<ProductState & ProductAction>()((set) => ({
  isOpen: false,
  onClose() {
    set(() => ({ isOpen: false }));
  },
  onOpen: () => set(() => ({ isOpen: true })),
}));

export default useProductStore;
