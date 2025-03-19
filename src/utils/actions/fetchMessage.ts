"use server";

export const fetchMessages = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/message`);
  const messages = await res.json();
  return messages
};