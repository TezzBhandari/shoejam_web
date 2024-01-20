import React from "react";
import { getMessages } from "../utils/GetData";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const DisplayFormData = async () => {
  const response = await getMessages({ page: 1, limit: 10 });
  console.log(response);
  if (response.code === "error") {
    return <div>{JSON.stringify(response.error.response)}</div>;
  }
  return (
    <div>
      {response.data.map((message) => {
        return (
          <div key={message.id}>
            <h2>{message.username}</h2>
            <p>{message.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayFormData;
