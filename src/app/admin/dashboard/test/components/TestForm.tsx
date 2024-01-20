"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Card from "./Card";
import { z } from "zod";
import FormInput from "./FormInput";
import { FormSchema } from "../utils/schema";
import { postMessage } from "../utils/actions";
import { zodResolver } from "@hookform/resolvers/zod";
type FormValues = z.infer<typeof FormSchema>;

const TestForm = () => {
  const [toast, setToast] = useState({
    showToast: false,
    toastMessage: "",
  });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      message: "",
    },
  });

  const processForm: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await postMessage(data);
      reset();
      setToast({
        showToast: true,
        toastMessage: "message sent",
      });
    } catch (error) {
      console.log("enderror", error);
      setToast({
        showToast: true,
        toastMessage: "Failed to  Send Message. Try Again",
      });
    } finally {
      setTimeout(() => {
        console.log("after 5 s");
        setToast({
          showToast: false,
          toastMessage: "",
        });
      }, 5000);
    }
  };

  return (
    <div>
      <div>
        <p className="p-2 text-lg font-semibold">
          {toast.showToast ? toast.toastMessage : ""}
        </p>
      </div>
      <form onSubmit={handleSubmit(processForm)}>
        <Card className="w-full flex flex-col gap-2">
          <div>
            <FormInput {...register("username")} placeholder="Product Name" />
            <p className="text-red-700">{errors.username?.message}</p>
          </div>
          <div>
            <FormInput
              {...register("message")}
              placeholder="Product Description"
            />
            <p className="text-red-700">{errors.message?.message}</p>
          </div>
        </Card>
        <div className="button-container mt-2 flex justify-center">
          <button
            type="submit"
            className="bg-indigo-500 rounded-lg px-2.5 py-2 cursor-pointer text-white text-lg hover:bg-indigo-600 font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TestForm;
