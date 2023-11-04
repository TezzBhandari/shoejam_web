"use client";
import useDeleteConfirmationModal from "@/store/DeleteConfirmationStore";
import { Dialog } from "@headlessui/react";
import { FaRegTrashCan } from "react-icons/fa6";
import { Category } from "./CategoryList";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface DeleteCategoryResponse {
  status: boolean;
  data: {
    deleted_category: Category;
  } | null;
  errors: Array<{ message: string; property: string }> | null;
}

const ConfirmationModal = () => {
  const { isOpen, category_id, onClose } = useDeleteConfirmationModal();
  console.log("delete category with id of: ", category_id);

  const mutation = useMutation({
    mutationFn: ({ category_id }: { category_id: string }) => {
      return axios.delete<DeleteCategoryResponse>(
        `http://localhost:3001/api/v1/admin/product-inventory/category/${category_id}`
      );
    },
    onSuccess(data, variables, context) {
      console.log("successfully deleted ", data, variables, context);
      onClose();
    },
    onError(error, variables, context) {
      console.log("failed to delete: ", error, variables, context);
    },
    onSettled(data, error, variables, context) {},
  });

  const handleDelete = () => {
    // cont;
    if (category_id) {
      mutation.mutate({ category_id });
    } else {
      console.log("no category selected");
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto"
    >
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
      <div className="p-5 rounded-xl ring-1 ring-black/5 md:min-w-[420px] relative mx-auto bg-white shadow-2xl">
        <div className="flex items-center justify-center py-5">
          <span className="text-red-600">
            <FaRegTrashCan className="w-8 h-8" />
          </span>
        </div>
        <div className="text-center pb-2">
          <h2 className="text-base font-semibold tracking-wide">
            Are you sure you want to continue?
          </h2>
        </div>
        <div className="flex items-center justify-center space-x-6 pb-2">
          <button
            onClick={onClose}
            className="px-3 py-2 border-none outline-none bg-gray-300 text-gray-500 rounded-lg hover:bg-gray-400"
          >
            cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-3 py-2 border-none outline-none bg-red-300 text-red-500 rounded-lg hover:bg-red-400 "
          >
            delete
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmationModal;
