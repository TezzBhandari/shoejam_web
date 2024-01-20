import React, { type InputHTMLAttributes, forwardRef } from "react";
import cn from "classnames";
import { RefCallBack } from "react-hook-form";

const FormInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...rest }, ref) => {
  return (
    <>
      <input
        {...rest}
        className={cn(
          "w-full px-2 border border-gray-200 py-1.5 bg-[#f3f3f3] rounded-md",
          className
        )}
        ref={ref}
      />
    </>
  );
});

export default FormInput;
