"use client";
import { Dialog } from "@headlessui/react";
import React, { useState } from "react";

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Dialog
      className=" fixed inset-0 p-4 pt-[25vh] overflow-y-auto"
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <Dialog.Overlay className="bg-gray-500/50 fixed inset-0" />
      <div className=" relative max-w-xl mx-auto bg-white rounded-xl ring-1 ring-black/5 shadow-2xl">
        <p className="py-4 text-purple-500 text-center">
          let's build a command palette
        </p>
      </div>
    </Dialog>
  );
};

export default CommandPalette;
