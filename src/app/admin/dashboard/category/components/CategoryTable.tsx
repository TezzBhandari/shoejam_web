"use client";
import React, { useMemo, useState } from "react";
import { MdDelete, MdModeEditOutline, MdAdd } from "react-icons/md";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { type Category } from "./CategoryList";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import CategoryCheckBox from "./CategoryCheckBox";
import useSubCategoryModalStore from "@/store/subCategoryModalStore";
import useDeleteConfirmationModal from "@/store/DeleteConfirmationStore";

const columnHelper = createColumnHelper<Category>();

const CategoryTable = ({ tableData }: { tableData: Array<Category> }) => {
  // this function is used to open subcategory modal form
  const { openModal } = useSubCategoryModalStore();
  const { onOpen: openDeleteCategoryModal } = useDeleteConfirmationModal();
  //handle edit
  const handleEdit = (row: Category) => {
    console.log(row);
  };

  // table data
  const [data, setData] = useState<Array<Category>>(tableData);

  // state for filtering table data
  const [filter, setFilter] = useState("");

  const [selectedRow, setSelectedRow] = useState({});

  //memoizing table data and column
  const memoData = useMemo(() => data, []);
  const memoColumn = useMemo(
    // COULUMN DEFINITION FOR THE TABLE
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <CategoryCheckBox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div>
            <CategoryCheckBox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
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
      {
        id: "actions",
        header: "Actions",
        cell: (info) => (
          <div className="flex items-center space-x-1">
            <span
              onClick={() => {
                openModal(info.row.original);
              }}
              className="cursor-pointer p-1 hover:bg-gray-300 rounded-md text-gray-600 "
            >
              <MdAdd className="w-5 h-5" />
            </span>
            {/* <span
              onClick={() => {
                // console.log(info.table.getCoreRowModel().flatRows[3].original);
                handleEdit(info.row.original);
              }}
              className="cursor-pointer p-1 hover:bg-gray-300 rounded-md text-gray-600"
            >
              <MdModeEditOutline className="w-5 h-5" />
            </span> */}
            <span
              onClick={() => {
                openDeleteCategoryModal({ category_id: info.row.original.id });
                // handleDelete(info.row.original);
              }}
              className="cursor-pointer p-1 hover:bg-red-300 hover:text-red-400 rounded-md text-gray-600"
            >
              <MdDelete className="w-5 h-5" />
            </span>
          </div>
        ),
      },
    ],
    // useMemo Dependency array
    []
  );

  // instantiating react table
  const table = useReactTable({
    columns: memoColumn,
    data: memoData,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      globalFilter: filter,
      rowSelection: selectedRow,
    },
    onRowSelectionChange: setSelectedRow,
    enableRowSelection: false,

    onGlobalFilterChange: setFilter,
  });

  // debug select
  // console.log(table.getSelectedRowModel().flatRows[0]?.original);

  return (
    <div className="w-table-wrapper  mx-auto border border-gray-300 bg-[#ffffff] shadow-lg rounded-2xl">
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
      {/* Table */}

      <table className="border-spacing-[2px] min-w-full rounded-2xl">
        {/* className=" border-spacing-[2px] min-w-full w-full" */}
        <thead className="bg-[#EBEBEB] text-[#616161]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className=" border-b border-gray-300 px-3 py-1.5 font-medium text-sm capitalize text-left overflow-auto"
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
            <tr
              key={row.id}
              className="border-b border-gray-300 last:border-b-0"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-3 py-2 text-sm">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
      {table.getCanNextPage() === true ||
      table.getCanPreviousPage() === true ? (
        <div className="pagination rounded-b-2xl flex items-center justify-center p-2 text-blue-700">
          <button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            className={
              table.getCanPreviousPage() === true
                ? `px-1.5 py-1 bg-[#ebebeb] rounded-l-xl`
                : `px-1.5 py-1 bg-[#f1f1f1] rounded-l-xl cursor-not-allowed`
            }
          >
            <GrFormPrevious className="w-5 h-5" />
          </button>
          <button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            className={
              table.getCanNextPage() === true
                ? `px-1.5 py-1 bg-[#ebebeb] rounded-r-xl hover:bg-[#e3e3e3]`
                : `px-1.5 py-1 bg-[#f1f1f1] rounded-r-xl cursor-not-allowed hover:bg-[#e3e3e3]`
            }
          >
            <GrFormNext className="w-5 h-5" />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default CategoryTable;
