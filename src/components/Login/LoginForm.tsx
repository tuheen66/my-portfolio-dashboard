/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { loginUser } from "@/utils/actions/UserService";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const LoginForm = () => {
  const router = useRouter();

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    const userData = { email, password };
  
    try {
      const res = await loginUser(userData);
      if (res && res.success) {
        Swal.fire("Logged in successfully !!!");
        
        // Redirect to the home page (or secured page)
        router.push("/admin/admin"); // Replace with any other secured page if needed
      } else {
        Swal.fire("Login failed", res?.message || "An error occurred", "error");
      }
    } catch (err: any) {
      Swal.fire("Error", err.message || "An unexpected error occurred", "error");
    }
  };
  
  


  return (
    <div className="flex flex-col lg:flex-row w-[90%] mx-auto items-center min-h-screen justify-center gap-12 ">
      <div className=" lg:w-[30%] bg-white p-6  text-gray-700 my-8 rounded-lg">
        <h2 className="text-center text-3xl font-bold">Admin Login</h2>

        <form onSubmit={handleSignIn} className="form-action">
          <div className="w-full">
            <label className="pl-4 " htmlFor="email">
              Admin email:
            </label>
            <input
              className="bg-gray-200 py-1 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
              type="email"
              placeholder="Admin email"
              name="email"
              id="email"
            />
          </div>

          <div className="w-full relative">
            <label className="pl-4 " htmlFor="password">
              Password:
            </label>
            <input
              className="bg-gray-200 py-1 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            />
          </div>

          <input
            className=" bg-orange-600 hover:bg-orange-800 py-1 rounded-lg w-full border-none text-white text-lg mt-6  "
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
