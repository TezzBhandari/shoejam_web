export type ProductState = {
  isOpen: boolean;
};

export type ProductAction = {
  onOpen: () => void;
  onClose: () => void;
};
