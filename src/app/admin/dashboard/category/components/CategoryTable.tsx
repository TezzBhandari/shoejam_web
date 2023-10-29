"use client";
import React, { useMemo, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { type Category } from "./CategoryList";
import { BiSearch } from "react-icons/bi";
import { Ephesis } from "next/font/google";

const columnHelper = createColumnHelper<Category>();

const columns = [
  columnHelper.accessor("id", {
    header: () => "id",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("category_name", {
    header: () => "category name",
    cell: (info) => info.getValue(),
  }),
  // columnHelper.accessor("category_slug", {
  //   header: () => "category slug",
  //   cell: (info) => info.getValue(),
  // }),

  columnHelper.accessor("category_path", {
    header: () => "category path",
    cell: (info) => info.getValue(),
  }),
  // columnHelper.accessor("category_level", {
  //   header: () => "category level",
  //   cell: (info) => info.getValue(),
  // }),
  // columnHelper.accessor("parent_category_id", {
  //   header: () => "parent category id",
  //   cell: (info) => info.getValue(),
  // }),
  columnHelper.accessor("parent_category_name", {
    header: () => "parent category name",
    cell: (info) =>
      info.getValue() !== null ? (
        info.getValue()
      ) : (
        <span className="bg-gray-400 text-center rounded-xl px-1.5 py-1 shadow-sm text-xs font-light capitalize">
          no parent
        </span>
      ),
  }),
];

const CategoryTable = ({ tableData }: { tableData: Array<Category> }) => {
  // table data
  const [data, setData] = useState<Array<Category>>(tableData);

  // state for filtering table data
  const [filter, setFilter] = useState("");

  //memoizing table data and column
  const memoData = useMemo(() => data, []);
  const memoColumn = useMemo(() => columns, []);

  // instantiating react table
  const table = useReactTable({
    columns: memoColumn,
    data: memoData,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filter,
    },
    onGlobalFilterChange: setFilter,
  });

  return (
    <div className="bg-[#ffffff] shadow-lg rounded-2xl border border-gray-300">
      <div className=" p-1">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center relative max-w-[500px] pl-[0.2rem] hover:border-slate-100 bg-transparent space-x-1 text-[#b5b5b5] rounded-lg cursor-text"
        >
          <input
            type="text"
            name="search"
            placeholder=" Search Categories..."
            autoComplete="off"
            id="search"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="placeholder:text-sm focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-300 w-full px-2 py-1 text-sm font-normal tracking-wide bg-transparent border border-gray-300 rounded-lg outline-none"
          />
        </form>
      </div>
      <table className=" border-spacing-[2px] min-w-full w-full">
        <thead className="bg-[#EBEBEB] text-[#616161]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className=" border-b border-gray-300 px-3 py-1.5 font-medium text-sm capitalize w-[100px] text-left overflow-auto"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-3 py-2 border-b text-sm w-[100px] border-gray-300"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
