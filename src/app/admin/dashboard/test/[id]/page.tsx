import React from "react";

const page = ({ params }: { params: { id: number } }) => {
  return <div>{`quiz ${params.id}`}</div>;
};

export default page;
