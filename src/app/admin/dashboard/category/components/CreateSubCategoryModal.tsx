"use client";
import useSubCategoryModalStore from "@/store/subCategoryModalStore";
import { Dialog } from "@headlessui/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Category } from "./CategoryList";

export interface SubCateogryMutationResponse {
  status: string;
  data: {
    sub_category: Category;
  } | null;
  errors: Array<{ message: string; property: string }> | null;
}

const CreateSubCategoryModal = () => {
  // zustand store state for subcategory modal
  const {
    isOpen,
    closeModal,
    resetInput,
    subCategoryInput,
    handleSubCategoryInput,
    parentCategory,
  } = useSubCategoryModalStore();

  // MUTATION
  const mutation = useMutation({
    mutationFn: ({
      sub_category_name,
      sub_category_slug,
      parent_category_id,
    }: {
      sub_category_name: string;
      sub_category_slug: string;
      parent_category_id: string;
    }) => {
      return axios.post<SubCateogryMutationResponse>(
        `http://localhost:3001/api/v1/admin/product-inventory/category/${parent_category_id}/sub-category`,
        {
          sub_category_name,
          sub_category_slug,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    },
    onSuccess(data, variables, context) {
      resetInput();
      closeModal();
      console.log("success: ", data, variables, context);
    },
    onError(error, variables, context) {
      console.log("error: ", error, variables, context);
    },
    onSettled(data, error, variables, context) {},
  });

  return (
    <Dialog open={isOpen} onClose={closeModal}>
      <div className="modal-wrapper fixed inset-0 z-[1000] flex items-center justify-center">
        <Dialog.Overlay className="bg-black bg-opacity-30 fixed inset-0" />
        <div className="modal p-2 rounded-xl ring-1 ring-black/5 md:min-w-[420px] relative mx-auto bg-white shadow-2xl">
          <div className="p-2 text-lg font-bold tracking-normal">
            <h2>Create Subcategory</h2>
          </div>
          <form className="p-2 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                name="sub_category_name"
                value={subCategoryInput.sub_category_name}
                onChange={handleSubCategoryInput}
                type="text"
                autoComplete="off"
                placeholder="Sub Category Name (e.g, Shoes, Pants)"
                className="focus:outline-none w-full px-3 py-1.5 border bg-transparent border-gray-300 rounded-lg shadow-sm focus:border-[#303030] focus:ring-1 focus:ring-[#303030] text-base placeholder:text-sm tracking-wider"
              />
            </div>
            <div>
              <input
                name="sub_category_slug"
                value={subCategoryInput.sub_category_slug}
                onChange={handleSubCategoryInput}
                type="text"
                autoComplete="off"
                placeholder="Sub Category Slug (Optional)"
                className="focus:outline-none w-full px-3 py-1.5 border bg-transparent border-gray-300 rounded-lg shadow-sm focus:border-[#303030] focus:ring-1 focus:ring-[#303030] text-base placeholder:text-sm tracking-wider"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => {
                  resetInput();
                  closeModal();
                }}
                // className={`${
                //   isPending ? "cursor-not-allowed" : ""
                // } focus:outline-none focus:ring-1 focus:ring-black px-2.5 py-1 text-sm font-medium border border-gray-300 rounded-lg shadow-sm outline-none`}
                // disabled={isPending ? true : false}
                className="focus:outline-none focus:ring-1 focus:ring-black px-2.5 py-1 text-sm font-medium border border-gray-300 rounded-lg shadow-sm outline-none"
              >
                cancel
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  // handle empty input before submitting
                  // if (!categoryInput.category_name) {
                  //   setValidationError({
                  //     category_name_error: "category name is required",
                  //   });
                  // } else {
                  //   submitCategory({
                  //     category_name: categoryInput.category_name,
                  //     category_slug: categoryInput.category_slug,
                  //   });
                  // }
                  let parent_category_id = "";
                  if (parentCategory !== null) {
                    parent_category_id = parentCategory.id;
                  }
                  mutation.mutate({
                    sub_category_name: subCategoryInput.sub_category_name,
                    sub_category_slug: subCategoryInput.sub_category_slug,
                    parent_category_id,
                  });
                }}
                className=" px-2 py-1 bg-[#303030] text-white rounded-lg outline-none font-medium text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
              >
                {/* {isPending ? "submitting..." : "save"} */} save
              </button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default CreateSubCategoryModal;
