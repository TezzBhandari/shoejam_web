"use client";
import { Transition } from "@headlessui/react";
import React, { useState } from "react";

const Product = () => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <>
      <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
        Toggle
      </button>
      <Transition show={isShowing} as="a" href="/my-url" className="font-bold">
        I will appear and disappear.
      </Transition>
    </>
  );
};

export default Product;
