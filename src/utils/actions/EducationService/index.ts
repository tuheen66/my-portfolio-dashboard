/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllExperiences = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/experience`);
      const response = await res.json();
  
      if (!res.ok) {
        throw new Error(
          `Failed to fetch projects: ${res.status} ${res.statusText}`
        );
      }
  
      return response;
    } catch (error: any) {
      console.log(error);
    }
  };
  