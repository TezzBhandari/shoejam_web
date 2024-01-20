import useProductStore from "@/store/productStore";
import Link from "next/link";

const AddProductButton = () => {
  return (
    <>
      <Link
        className="bg-neutral-800 px-2 py-1 text-sm font-semibold tracking-wide text-white border-none rounded-lg outline-none"
        href={"/admin/dashboard/products/new"}
      >
        Add Product
      </Link>
    </>
  );
};

export default AddProductButton;
