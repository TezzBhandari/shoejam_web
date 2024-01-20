import axios, { AxiosError } from "axios";
import { RequestHandler } from "./types";

export type Message = {
  id: number;
  username: string;
  message: string;
};

type MessageParams = {
  limit?: number;
  page?: number;
};

export type Answer = {
  answerId: number;
  answerText: string;
  isCorrect: boolean;
};

export type Quiz = {
  id: number;
  name: string;
  question: string;
  answer: Array<Answer>;
};

export type QuizParams = {};

export const getMessages = RequestHandler<
  MessageParams,
  AxiosError,
  MessageParams
>((params) => axios.get("http://localhost:3000/api/form", { params }));

export const getQuizzes = RequestHandler<Array<Quiz>, AxiosError>(() =>
  axios.get("http://localhost:3000/api/quizzes")
);
