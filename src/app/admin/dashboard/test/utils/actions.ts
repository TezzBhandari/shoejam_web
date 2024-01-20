"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export const postMessage = async ({
  username,
  message,
}: {
  username: string;
  message: string;
}) => {
  console.log("action");
  try {
    const response = axios.post("http://localhost:3000/api/form", {
      username,
      message,
    });
    revalidatePath("/admin/dashboard/test");
    return response;
  } catch (err) {
    console.log(err);
  }
};
