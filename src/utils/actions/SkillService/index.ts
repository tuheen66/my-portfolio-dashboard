/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllSkills = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/skills`);
    const response = await res.json();

    return response;
  } catch (error: any) {
    console.log(error);
  }
};
