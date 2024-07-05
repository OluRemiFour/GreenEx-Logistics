import Link from "next/link";
import React from "react";

function CreateAccount() {
  return (
    <div>
      <div className="mx-18">
        <h1 className="mx-auto flex mt-12 md:mt-auto md:justify-center mb-8 font-semibold text-2xl">
          Create Account
        </h1>
        <form>
          <div className="text-[12px] font-medium my-8 target:text-red-500">
            <label className="mt-[-.6rem] bg-white px-2 absolute ml-8">
              First Name
            </label>
            <input
              type="text"
              required
              className="border border-black outline-none rounded-md p-4 md:w-[30rem] w-[24rem]"
            />{" "}
          </div>
          <div className="text-[12px] font-medium my-10">
            <label className="mt-[-.6rem] bg-white px-2 absolute ml-8">
              Last Name
            </label>
            <input
              type="text"
              required
              className="border border-black outline-none rounded-md p-4 w-[24rem] md:w-[30rem]"
            />{" "}
          </div>
          <div className="text-[12px] font-medium my-10">
            <label className="mt-[-.6rem] bg-white px-2 absolute ml-8  ">
              Phone Number
            </label>
            <input
              type="text"
              required
              className="border border-black outline-none rounded-md p-4 w-[24rem] md:w-[30rem] placeholder:font-semibold"
              placeholder="+234"
            />{" "}
          </div>
          <div className="text-[12px] font-medium my-10">
            <label className="mt-[-.6rem] bg-white px-2 absolute ml-8">
              Password
            </label>
            <input
              type="password"
              required
              className="border border-black outline-none rounded-md p-4 w-[24rem] md:w-[30rem]"
            />{" "}
          </div>
          <div className="text-[12px] font-medium my-10">
            <label className="mt-[-.6rem] bg-white px-2 absolute ml-8">
              Confirm Password
            </label>
            <input
              type="text"
              required
              className="border border-black outline-none rounded-md p-4 w-[24rem] md:w-[30rem]"
            />{" "}
          </div>
          <div className="text-[12px] font-medium my-10">
            <label className="mt-[-.6rem] bg-white px-2 absolute ml-8">
              Corporate email
            </label>
            <input
              type="text"
              required
              className="border border-black outline-none rounded-md p-4 w-[24rem] md:w-[30rem]"
            />{" "}
          </div>
          <div className="text-[12px] font-medium my-10">
            <label className="mt-[-.6rem] bg-white px-2 absolute ml-8">
              Company Address
            </label>
            <input
              type="text"
              required
              className="border border-black outline-none rounded-md p-4 w-[24rem] md:w-[30rem]"
            />{" "}
          </div>
          <div className="flex space-x-2 mb-6">
            <input type="checkbox" />
            <label
              htmlFor="checkbox"
              className="text-[#141414] text-sm font-light cursor-pointer transition-all duration-200 hover:underline  hover:text-[#6BDA6C]"
            >
              Accept terms and conditions
            </label>
          </div>

          <Link
            href="/"
            className="bg-[#66cc66] py-[.8rem] text-sm font-medium px-10 md:w-[30rem] w-[24rem] flex md:mx-auto justify-center rounded-md border-[#66cc66] transition-all duration-500 text-white hover:bg-transparent hover:text-black hover:border-black border-[1px] hover:translate-x-1"
          >
            Create Account
          </Link>

          <div className="flex space-x-2 my-4 mx-auto justify-center">
            <p className="text-[#141414] text-sm font-semibold">
              Already have an account?
            </p>
            <span className="text-red-600 text-sm font-semibold cursor-pointer transition-all duration-200 hover:underline">
              Log In!
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
