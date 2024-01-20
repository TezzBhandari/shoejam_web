import { IoIosArrowRoundBack } from "react-icons/io";

import TestForm from "./components/TestForm";
import DisplayFormData from "./components/DisplayFormData";
import Quizzes from "./components/Quizzes";
import { Suspense } from "react";

// LET'S CREATE A FORM WITHOUT USING ANY LIBRARIES
// text-color: #303030
// left arrow icon color: #4a4a4a
const page = () => {
  return (
    <div className="page-container text-default-color">
      <div className="wrapper max-w-[950px] w-[90%] mx-auto">
        <div className="bar-container border border-red-400 py-5 flex items-center gap-1">
          <span className="text-[#4a4a4a] font-bold">
            <IoIosArrowRoundBack className="w-6 h-6" />
          </span>
          <h2 className="font-semibold text-xl">Add Product</h2>
        </div>
        <div className="form-container flex  gap-2 border border-blue-400">
          <div className="left-container p-2 w-[62%]">
            <TestForm />
            <Suspense fallback={<div>Loading...</div>}>
              <Quizzes />
            </Suspense>
          </div>
          <div className="right-container p-2 w-[33%]">
            <DisplayFormData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
