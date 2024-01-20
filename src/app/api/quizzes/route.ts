import { NextResponse } from "next/server";
let quizzes = [
  {
    id: 1,
    name: "Quiz 1",
    question: "What is variable?",
    answer: [
      {
        answerId: 1,
        answerText: "xyz",
        isCorrect: false,
      },
      {
        answerId: 2,
        answerText: "abc",
        isCorrect: false,
      },
      {
        answerId: 1,
        answerText: "it is used to store data",
        isCorrect: true,
      },
    ],
  },
  {
    id: 2,
    name: "Quiz 2",
    question: "what's your name?",
    answer: [
      { answerId: 1, answerText: "sam", isCorrect: false },
      { answerId: 2, answerText: "tezz", isCorrect: true },
    ],
  },
];
export const GET = (req: Request) => {
  return NextResponse.json(quizzes);
};

export const getQuizById = ({ id }: { id: number }) => {
  return quizzes.find((q) => q.id === id);
};
