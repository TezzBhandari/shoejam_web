import React, { InputHTMLAttributes } from "react";
import cn from "classnames";

const FormCardLayout: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <section
      {...rest}
      className={cn("bg-white p-4 rounded-xl product-shadow", className)}
    >
      {children}
    </section>
  );
};

export default FormCardLayout;
