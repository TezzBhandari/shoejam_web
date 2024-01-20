import React, { InputHTMLAttributes, RefObject, forwardRef } from "react";
import cn from "classnames";

// const FormInput = forwardRef<
//   HTMLInputElement,
//   InputHTMLAttributes<HTMLInputElement>
// >(({ className, ...rest }, ref) => {
//   console.log("ref", ref);
//   return (
//     <input
//       {...rest}
//       ref={ref}
//       className={cn(
//         "w-full px-2 py-1 bg-transparent border outline-none placeholder:text-sm border-zinc-500 rounded-lg bg-none placeholder:text-zinc-400 focus:border-[#e3e3e3]",
//         className
//       )}
//     />
//   );
// });

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: RefObject<HTMLInputElement>;
}

const FormInput: React.FC<InputProps> = ({ inputRef, className, ...rest }) => {
  return (
    <>
      <input
        {...rest}
        className={cn(
          "w-full px-2 py-1 bg-transparent border outline-none placeholder:text-sm border-zinc-500 rounded-lg bg-none placeholder:text-zinc-400 focus:border-[#e3e3e3]",
          className
        )}
        ref={inputRef}
      />
    </>
  );
};

export default FormInput;
