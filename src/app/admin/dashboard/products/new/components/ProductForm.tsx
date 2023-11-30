"use client";
import React, { useRef } from "react";
import FormInput from "./FormInput";
import FormCardLayout from "./FormCardLayout";

import { BsQuestionOctagon } from "react-icons/bs";
import ListBox from "./ListBox";

const ProductForm = () => {
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const selectImageHandler = () => {
    console.log(imageInputRef.current?.click());
  };
  return (
    <form className="flex items-start justify-between">
      {/* PRODUCT NAME AND DESCRIPTION SECTION */}
      <div className="left pt-2 pl-2 w-[62%]">
        <div className="flex flex-col gap-6">
          <FormCardLayout className="flex flex-col gap-2.5">
            <div className="title-input flex flex-col gap-1.5">
              <label className="text-sm font-semibold" htmlFor="product_title">
                Title
              </label>
              <FormInput
                id="product_title"
                placeholder="Short sleeve t-shirt"
              />
            </div>

            {/* PRODUCT SLUG  */}
            {/* <div className="flex flex-col gap-1.5">
              <h3 className="text-sm font-semibold">Product Slug</h3>
              <FormInput placeholder="product slug" />
            </div> */}

            <div className="product-description-container flex flex-col gap-1.5">
              <label
                className=" text-sm font-semibold"
                htmlFor="product_description"
              >
                Description
              </label>
              {/* <FormInput id="product_description" type="textarea" />
               */}
              <textarea
                id="product_description"
                name="product_description"
                rows={4}
                cols={50}
                className="w-full px-2 py-1 bg-transparent border resize-none outline-none border-zinc-500 rounded-lg placeholder:text-zinc-400 focus:border-[#e3e3e3]"
              ></textarea>
            </div>
          </FormCardLayout>
          <FormCardLayout>
            <div className="image-upload-input flex flex-col gap-1.5">
              <label
                className=" text-sm font-semibold"
                htmlFor="product-thumnail"
              >
                Thumnail
              </label>
              <div>
                <div
                  onClick={(e) => selectImageHandler()}
                  className="border-2 rounded-lg py-8 cursor-pointer bg-[#fdfdfd] hover:bg-slate-400 border-dashed flex items-center justify-center"
                >
                  <FormInput
                    inputRef={imageInputRef}
                    type="file"
                    className="hidden"
                  />
                  <div className="flex flex-col gap-[0.2rem]">
                    <button className="shadow-upload-image hover:bg-slate-400 capitalize bg-[#fff] text-center border-none rounded-lg text-sm px-1.5 py-3 font-medium text-[#303030]">
                      Upload new
                    </button>
                    <p className="capitalize text-[#616161] text-sm tracking-wide">
                      accepts images
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FormCardLayout>
          <FormCardLayout>
            <div className="flex flex-col gap-1.5">
              <h2 className="text-sm font-semibold">pricing</h2>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-sm font-medium">price</h3>
                  <FormInput type="number" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium">compare-at price</h3>
                    <span>
                      <BsQuestionOctagon className="w-4 h-4" />
                    </span>
                  </div>
                  <FormInput type="number" />
                </div>
              </div>
            </div>
          </FormCardLayout>
          <FormCardLayout>
            <div>
              <h2>Brand</h2>
              <ListBox />
            </div>
          </FormCardLayout>
          {/* <FormCardLayout>
            <div>
              <h2>Variants</h2>
              <button
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-[0.2rem] border-none outline-none bg-transparent text-sm cursor-pointer text-blue-600"
              >
                <span>+</span>
                <span className="underline">
                  Add options like size or color
                </span>
              </button>
            </div>
          </FormCardLayout> */}
        </div>
      </div>
      {/* LEFT SIDE OF THE FORM  */}
      <div className="right pt-2 pr-2 w-[33%]">
        <FormCardLayout>
          <h3>Status</h3>
          <FormInput />
        </FormCardLayout>
      </div>
    </form>
  );
};

export default ProductForm;
