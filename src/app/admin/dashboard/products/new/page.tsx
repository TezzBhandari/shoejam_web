import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import ProductForm from "./components/ProductForm";
const NewProduct = () => {
  return (
    <>
      <div className="w-full pt-2 pb-6">
        <div className="container w-[90%] max-w-[950px] mx-auto">
          <div className="flex items-center px-2 py-4">
            <div className="navigate-back flex items-center space-x-3 font-bold text-xl">
              <Link
                className="text-gray-600 hover:bg-gray-400 px-[2.5px] py-[3px] rounded-md cursor-pointer "
                href={"/admin/dashboard/products"}
              >
                <FaArrowLeft />
              </Link>
              <h2>Add Product</h2>
            </div>
          </div>
          {/* PRODUCT FORM  */}
          <ProductForm />
        </div>
      </div>
    </>
  );
};

export default NewProduct;
