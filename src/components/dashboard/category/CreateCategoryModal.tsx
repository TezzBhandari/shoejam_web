"use client";

import React, { FormEvent, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import useCategoryModalStore from "@/store/categoryModalStore";

const CreateCategoryModal = () => {
  const state = useCategoryModalStore();
  return (
    <>
      {/*  dialog components */}

      <Transition show={state.isOpen} as={Fragment}>
        <Dialog
          onClose={state.closeModal}
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
              <form
                className="p-2 space-y-6"
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                }}
              >
                <div>
                  <input
                    type="text"
                    placeholder="Category Name (e.g, Clothing, Electronics)"
                    className="focus:outline-none w-full px-3 py-1.5 border bg-transparent border-gray-300 rounded-lg shadow-sm focus:border-[#303030] focus:ring-1 focus:ring-[#303030] text-base placeholder:text-sm tracking-wider"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Category Slug (Optional)"
                    className="focus:outline-none w-full bg-transparent placeholder-gray-400 px-2.5 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:border-[#303030] focus:ring-1 focus:ring-[#303030] text-base placeholder:text-sm tracking-wider"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={state.closeModal}
                    className=" focus:outline-none focus:ring-1 focus:ring-black px-2.5 py-1 text-sm font-medium border border-gray-300 rounded-lg shadow-sm outline-none"
                  >
                    cancel
                  </button>
                  <button
                    onClick={() => {}}
                    className=" px-2 py-1 bg-[#303030] text-white rounded-lg outline-none font-medium text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
                  >
                    save
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
