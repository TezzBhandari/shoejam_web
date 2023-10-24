import React from "react";

const ErrorTemplate = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <>
      {errorMessage ? (
        <div className="mt-1 pl-1">
          <p className="text-red-900 text-xs font-semibold">{errorMessage}</p>
        </div>
      ) : null}
    </>
  );
};

export default ErrorTemplate;
