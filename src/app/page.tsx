"use client";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function Home() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="min-h-[1000px] border-2  bg-none border-red-500">
        <h1>hello world</h1>
      </div>
      {/* <div className="relative bg-emerald-300 z-[1]">
        <button className="bg-slate-400" onClick={() => setIsOpen(true)}>
          Open Model
        </button>
        {isOpen ? (
          <>
            <div className="fixed inset-0 bg-black/30 z-[1000]" />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-300 p-4 z-[1000]">
              <button onClick={() => setIsOpen(false)}>close modal</button>
              <p>Fancy Modal</p>
            </div>
          </>
        ) : null}
      </div>
      <div className="relative z-[2] bg-red-300 p-2">Other content</div> */}
      {/* <button onClick={() => setIsOpen(true)}>open modal</button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="border border-red-400 p-8"
      >
        <Dialog.Panel as="div" className="border border-green-400">
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </Dialog> */}
    </>
  );
}
