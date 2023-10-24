"use client";

import React, { FormEvent, Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import useCategoryModalStore from "@/store/categoryModalStore";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import ErrorTemplate from "./ErrorTemplate";
import { isAxiosError } from "axios";

export interface Category {
  id: string;
  category_name: string;
  category_slug: string;
  parent_category: string | null;
  updated_at: string;
  created_at: string;
}

export interface CateogryMutationResponse {
  status: string;
  data: {
    category: CateogryMutationResponse;
  } | null;
  errors: Array<{ message: string; property: string }> | null;
}

const CreateCategoryModal = () => {
  const {
    isOpen,
    closeModal,
    resetInput,
    setValidationError,
    validationError,
    categoryInput,
    handleCategoryInput,
  } = useCategoryModalStore();

  const {
    mutate: submitCategory,
    isPending,
    isSuccess,
    isError,
    isIdle,
  } = useMutation({
    mutationFn: async ({
      category_name,
      category_slug,
    }: {
      category_name: string;
      category_slug: string;
    }) =>
      await axios.post<CateogryMutationResponse>(
        "http://localhost:3001/api/v1/admin/product-inventory/category",
        {
          category_name,
          category_slug,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ),
    onSuccess: ({ data }) => {
      resetInput();
      closeModal();
      console.log("success");
      // toast logic here
      console.log(JSON.stringify(data));
    },
    onError: (error) => {
      console.log("error section");
      if (
        isAxiosError<CateogryMutationResponse, Record<string, unknown>>(error)
      ) {
        // console.log(error.response?.data.status === "error");

        if (error.response?.status === 409) {
          setValidationError({
            category_name_error: "category name already exists",
          });
        }

        if (error.response?.status === 400) {
          setValidationError({
            category_name_error: "category name is required",
          });
        }
      } else {
        console.log("something else occured");
      }
      // console.log(JSON.stringify(error))
    },
    onSettled: (data, error) => {
      console.log("settled");
      console.log(data, "error", error);
    },
  });

  const handleCategorySubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {/*  dialog components */}

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          onClose={closeModal}
          className="fixed inset-0 flex items-center z-[1000] justify-center overflow-y-auto"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className=" bg-opacity-30 fixed inset-0 bg-black" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="p-2 rounded-xl ring-1 ring-black/5 md:min-w-[420px] relative mx-auto bg-white shadow-2xl">
              <div className="p-2 text-lg font-bold tracking-normal">
                <h2>Create Category</h2>
              </div>
              <form className="p-2 space-y-6" onSubmit={handleCategorySubmit}>
                <div>
                  <input
                    name="category_name"
                    value={categoryInput.category_name}
                    onChange={handleCategoryInput}
                    type="text"
                    placeholder="Category Name (e.g, Clothing, Electronics)"
                    className="focus:outline-none w-full px-3 py-1.5 border bg-transparent border-gray-300 rounded-lg shadow-sm focus:border-[#303030] focus:ring-1 focus:ring-[#303030] text-base placeholder:text-sm tracking-wider"
                  />
                  <ErrorTemplate
                    errorMessage={validationError.category_name_error}
                  />
                </div>
                <div>
                  <input
                    name="category_slug"
                    value={categoryInput.category_slug}
                    onChange={handleCategoryInput}
                    type="text"
                    placeholder="Category Slug (Optional)"
                    className="focus:outline-none w-full bg-transparent placeholder-gray-400 px-2.5 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:border-[#303030] focus:ring-1 focus:ring-[#303030] text-base placeholder:text-sm tracking-wider"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={closeModal}
                    className={`${
                      isPending ? "cursor-not-allowed" : ""
                    } focus:outline-none focus:ring-1 focus:ring-black px-2.5 py-1 text-sm font-medium border border-gray-300 rounded-lg shadow-sm outline-none`}
                    disabled={isPending ? true : false}
                  >
                    cancel
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      // handle empty input before submitting
                      if (!categoryInput.category_name) {
                        setValidationError({
                          category_name_error: "category name is required",
                        });
                      } else {
                        submitCategory({
                          category_name: categoryInput.category_name,
                          category_slug: categoryInput.category_slug,
                        });
                      }
                    }}
                    className=" px-2 py-1 bg-[#303030] text-white rounded-lg outline-none font-medium text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
                  >
                    {isPending ? "submitting..." : "save"}
                  </button>
                </div>
              </form>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default CreateCategoryModal;
