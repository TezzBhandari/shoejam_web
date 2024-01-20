import { NextResponse } from "next/server";

import { getQuizById } from "../route";

export const GET = (req: Request, context: { params: { id: number } }) => {
  console.log(context);
  const quiz = getQuizById({ id: context.params.id });
  console.log(quiz);
  if (quiz === undefined) {
    return NextResponse.json({ data: null });
  }
  return NextResponse.json({ data: quiz });
};
