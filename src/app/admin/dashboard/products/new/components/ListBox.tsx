import { Listbox, Transition } from "@headlessui/react";
import { FaCheck } from "react-icons/fa6";
import React, { Fragment, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import FormInput from "./FormInput";

const data = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
  { id: 6, name: "Durward Reynolds", unavailable: false },
  { id: 7, name: "Kenton Towne", unavailable: false },
  { id: 8, name: "Therese Wunsch", unavailable: false },
  { id: 9, name: "Benedict Kessler", unavailable: true },
  { id: 10, name: "Katelyn Rohan", unavailable: false },
];

const ListBox = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [selectedPerson, setSelectedPerson] = useState(filteredData[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setFilteredData(filtered);
  };

  const searchTermClearHandler = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setSearchTerm("");
    setFilteredData(data);
  };

  // const listOptionClickHandler = (
  //   e: React.MouseEvent<HTMLLIElement, MouseEvent>
  // ) => {
  //   setSearchTerm("");
  //   setFilteredData(data);
  // };
  return (
    <div className="w-full">
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <div>
          <Listbox.Button className="w-full cursor-default rounded-lg text-lg font-normal bg-[#f1f1f1] flex items-center justify-between py-2 pl-2 pr-1 shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-600 sm:text-sm">
            <span className="block truncate">{selectedPerson.name}</span>
            <span>
              <RiArrowDropDownLine className="h-7 w-7" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="w-full p-2 mt-2 rounded-md shadow-lg max-h-48 overflow-y-scroll overflow-x-hidden text-base ring-1 ring-black/5 focus:outline-none sm:text-sm">
              <div className="search-wrapper flex items-center relative w-full">
                <FormInput
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={searchHandler}
                />
                {searchTerm && (
                  <span
                    // className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    className="ml-[-1.25rem] text-zinc-500 cursor-pointer"
                    onClick={searchTermClearHandler}
                  >
                    <RxCross2 className="w-4 h-4" />
                  </span>
                )}
              </div>
              <div className="content-wrapper pl-1 py-1.5">
                {filteredData.map((person) => {
                  return (
                    <Listbox.Option
                      key={person.id}
                      value={person}
                      // onClick={listOptionClickHandler}
                      disabled={person.unavailable}
                      className={({ active, disabled }) =>
                        `relative select-none py-2 pl-10 pr-4 rounded-md ${
                          active
                            ? "bg-blue-500 text-white cursor-pointer"
                            : disabled
                            ? "opacity-50 cursor-not-allowed"
                            : "text-[#303030] cursor-pointer"
                        }`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#303030]">
                              <FaCheck className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  );
                })}
              </div>
            </Listbox.Options>
          </Transition>
        </div>
        {/* wrapper for listbox  */}
      </Listbox>
    </div>
  );
};

export default ListBox;
