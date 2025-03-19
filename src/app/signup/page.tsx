
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import login from "../../assets/images/signup.png";

const SignUpPage = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row w-[90%] mx-auto items-center min-h-screen justify-center gap-12 ">
      
      <div className=" lg:w-[30%] bg-white p-6  text-gray-700 my-8 rounded-lg">
        <h2 className="text-center text-3xl font-bold">Please Signup</h2>

        <form
          // onSubmit={handleSignIn}
          className="form-action"
        >
          <div className="w-full">
            <label className="pl-4 " htmlFor="name">
              Your name:
            </label>
            <input
              className="bg-gray-200 py-1 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
              type="text"
              placeholder="Your name"
              name="name"
              id="name"
            />
          </div>
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

        <div className="text-center mt-4 space-y-2">
          <p className="flex justify-center items-center">
            Sign In with
            <span
              //   onClick={handleGoogleSignIn}
              className=" text-2xl font-bold mx-2 cursor-pointer hover:underline"
            >
              <FcGoogle />
            </span>
            <span>OR</span>
            <span
              //   onClick={handleGoogleSignIn}
              className="text-2xl font-bold mx-2 cursor-pointer hover:underline"
            >
              <FaGithub />
            </span>
          </p>
          <p>
            Already have an account? Please
            <Link href="/login" className="font-bold ml-2 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div>
        <Image src={login} width={500} height={400} alt="login" className="rounded-lg" />
      </div>
    </div>
    );
};

export default SignUpPage;