"use server";

import { IFormInput } from "@/utils/Types";



export const postMessage = async (data: IFormInput) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const message = await res.json();

  return message;
};

export const getAllMessage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/message`);
  const messages = await res.json();
  return messages;
};
