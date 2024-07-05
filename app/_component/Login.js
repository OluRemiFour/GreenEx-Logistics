import Link from "next/link";
import React from "react";

function Login() {
  return (
    <div className="mx-18">
      <h1 className="mx-auto mt-8 lg:mt-0 lg:flex justify-center mb-8 font-semibold text-2xl">
        Login
      </h1>
      <form>
        <div className="text-[12px] font-medium my-8 target:text-red-500">
          <label className="mt-[-.6rem] bg-white px-2 absolute ml-8">
            Email
          </label>
          <input
            type="text"
            required
            className="border border-black outline-none rounded-md p-4 lg:w-[20rem] w-[15rem]"
          />{" "}
        </div>
        <div className="text-[12px] font-medium my-10">
          <label className="mt-[-.6rem] bg-white px-2 absolute ml-8">
            Password
          </label>
          <input
            type="password"
            required
            className="border border-black outline-none rounded-md p-4 lg:w-[20rem] w-[15rem]"
          />{" "}
          <Link
            href=""
            className="text-[#66cc66] underline flex lg:justify-end py-3 font-semibold"
          >
            Forgot Password?
          </Link>
        </div>

        <Link
          href="/welcome"
          className="bg-[#66cc66] py-[.8rem] text-sm font-medium px-10 w-[20rem] lg:flex mx-auto justify-center rounded-md border-[#66cc66] transition-all duration-500 text-white hover:bg-transparent hover:text-black hover:border-black border-[1px] hover:translate-x-1"
        >
          Login
        </Link>

        <div className="lg:flex lg:space-x-2 my-4 mx-auto justify-center">
          <p className="text-[#141414] text-sm font-semibold">
            Don&apos;t have an account?
          </p>
          <span className="text-red-600 text-sm font-semibold cursor-pointer transition-all duration-200 hover:underline">
            Sign up!
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
