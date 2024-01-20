import React from "react";
import { getQuizzes } from "../utils/GetData";
import Link from "next/link";

const Quizzes = async () => {
  const response = await getQuizzes();
  if (response.code === "error") {
    console.log(response.error);
    return <h2>failed to load quizzes</h2>;
  }
  console.log(response.data);
  return (
    <div>
      {response.data.map((q) => {
        return (
          <div className="flex flex-col">
            <Link
              className="hover:underline"
              href={`/admin/dashboard/test/${q.id}`}
              key={q.id}
            >
              {q.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Quizzes;
