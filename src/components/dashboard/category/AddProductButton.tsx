"use client";
import useCategoryModalStore from "@/store/categoryModalStore";
import React from "react";

const AddProductButton = () => {
  const openModal = useCategoryModalStore((state) => state.openModal);

  return (
    <>
      <button
        onClick={openModal}
        className="bg-neutral-800 px-2 py-1 text-sm font-semibold tracking-wide text-white border-none rounded-lg outline-none"
      >
        Add Category
      </button>
    </>
  );
};

export default AddProductButton;
