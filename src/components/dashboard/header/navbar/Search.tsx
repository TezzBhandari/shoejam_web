"use client";
import { FormEvent } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const searchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={searchSubmit}
      className="flex items-center relative w-full pl-[0.2rem] border border-[#616161] hover:border-slate-100 bg-[#303030] space-x-1 text-[#b5b5b5] rounded-lg cursor-text"
    >
      <label htmlFor="search" className="cursor-text translate-y-[1px]">
        <BiSearch className="w-4 h-4" />
      </label>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        autoComplete="off"
        id="search"
        className=" placeholder:text-sm flex-1 py-1 pr-1 text-sm font-normal tracking-wide bg-transparent border-none rounded-r-lg outline-none"
      />
    </form>
  );
};

export default Search;
