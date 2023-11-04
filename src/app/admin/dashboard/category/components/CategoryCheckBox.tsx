import React, { HTMLProps, useRef } from "react";

const CategoryCheckBox = ({
  indeterminate,
  className = "",
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) => {
  const checkRef = React.useRef<HTMLInputElement>(null!);

  React.useEffect(() => {
    if (typeof indeterminate === "boolean") {
      checkRef.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [checkRef, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={checkRef}
      className={className + " cursor-pointer"}
      {...rest}
    />
  );
};

export default CategoryCheckBox;
