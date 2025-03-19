"use client";

// import Link from "next/link";
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import login from "../../assets/images/login.png";
// import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="flex flex-col lg:flex-row w-[90%] mx-auto items-center min-h-screen justify-center gap-12 ">
      <div>
        <Image
          src={login}
          width={400}
          height={400}
          alt="login"
          className="rounded-lg"
        />
      </div>
      <div className=" lg:w-[30%] bg-white p-6  text-gray-700 my-8 rounded-lg">
        <h2 className="text-center text-3xl font-bold">Please Login</h2>

        <form
          // onSubmit={handleSignIn}
          className="form-action"
        >
          <div className="w-full">
            <label className="pl-4 " htmlFor="email">
              Your email:
            </label>
            <input
              className="bg-gray-200 py-1 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
              type="email"
              placeholder="Your email"
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
            className=" bg-[#e67e22] py-1 rounded-lg w-full border-none text-white text-lg mt-6 hover:bg-[#30336b] "
            type="submit"
            value="Login"
          />
        </form>

        {/* <div className="text-center mt-4 space-y-2">
          <p>Sign In with</p>
          <div className="flex justify-center items-center">
            <button
              onClick={() =>
                signIn("google", {
                  callbackUrl: "https://my-portfolio-forntend.vercel.app/dashboard",
                })
              }
              className=" text-2xl font-bold mx-2 cursor-pointer hover:underline"
            >
              <FcGoogle />
            </button>
            <span>OR</span>
            <button
              onClick={() =>
                signIn("github", {
                  callbackUrl: "https://my-portfolio-forntend.vercel.app/dashboard",
                })
              }
              className="text-2xl font-bold mx-2 cursor-pointer hover:underline"
            >
              <FaGithub />
            </button>
          </div>
          <p>
            New to this site? Please
            <Link href="/signup" className="font-bold ml-2 hover:underline">
              Register
            </Link>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default LoginPage;
