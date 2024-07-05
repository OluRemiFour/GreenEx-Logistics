"use client";

import { IoIosBicycle } from "react-icons/io";
// import Login from "../_component/Login";
import Navigation from "../_component/Navigation";
import { useState } from "react";
import CreateAccount from "../_component/CreateAccount";
import Link from "next/link";

export default function Page() {
  const [openLogin, setOpenLogin] = useState(true);
  const [openCreateAccount, setOpenCreateAccount] = useState(false);

  function handleCreateAccount() {
    setOpenLogin((open) => !open);
    setOpenCreateAccount((open) => !open);
  }
  return (
    <>
      <div className="md:mx-14 mx-4 my-6">
        <Navigation />
        <div className="md:mx-10 my-8 lg:flex justify-between gap-2">
          <div className="">
            <h1 className="font-medium md:text-[28px] text-[24px] md:py-8 pb-4">
              Have multiple deliveries to do
              <br /> in a day?
            </h1>
            <p className="text-slate-500 font-medium">
              No problem! Rent a dispatch bike for a day at a flat <br /> fee of{" "}
              N10,000. Bikes come fueled.
            </p>

            <h1 className="font-medium md:text-[28px] text-[24px] py-8">
              Green365 Corporate gives you <br />
              access to
            </h1>

            <div className="text-[#666666] space-y-3 font-medium">
              <div className="flex gap-3">
                <IoIosBicycle size={22} />
                <p> View and keep track of order history</p>
              </div>
              <div className="flex gap-3">
                <IoIosBicycle size={22} />
                <p> Priority pick up and delivery</p>
              </div>
              <div className="flex gap-3">
                <IoIosBicycle size={22} />
                <p> Priority customer service</p>
              </div>
              <div className="flex gap-3">
                <IoIosBicycle size={22} />
                <p> Guaranteed same-day delivery</p>
              </div>
              <div className="flex gap-3">
                <IoIosBicycle size={22} />
                <p> Sunday Deliveries</p>
              </div>
            </div>
          </div>

          {/* <Login /> */}
          {openLogin && (
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
                    className="border border-black outline-none rounded-md p-4 lg:w-[30rem] w-[22rem]"
                  />{" "}
                </div>
                <div className="text-[12px] font-medium my-10">
                  <label className="mt-[-.6rem] bg-white px-2 absolute ml-8">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    className="border border-black outline-none rounded-md p-4 lg:w-[30rem] w-[22rem]"
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
                  className="bg-[#66cc66] py-[.8rem] text-sm font-medium px-10 w-[30rem] lg:flex mx-auto justify-center rounded-md border-[#66cc66] transition-all duration-500 text-white hover:bg-transparent hover:text-black hover:border-black border-[1px] hover:translate-x-1"
                >
                  Login
                </Link>

                <div className="lg:flex lg:space-x-2 my-4 mx-auto justify-center">
                  <p className="text-[#141414] text-sm font-semibold">
                    Don&apos;t have an account?
                  </p>
                  <span
                    onClick={handleCreateAccount}
                    className="text-red-600 text-sm font-semibold cursor-pointer transition-all duration-200 hover:underline"
                  >
                    Sign up!
                  </span>
                </div>
              </form>
            </div>
          )}

          {/* <CreateAccount /> */}
          {openCreateAccount && (
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
                      className="border border-black outline-none rounded-md p-4 md:w-[30rem] w-[23rem]"
                    />{" "}
                  </div>
                  <div className="text-[12px] font-medium my-10">
                    <label className="mt-[-.6rem] bg-white px-2 absolute ml-8">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="border border-black outline-none rounded-md p-4 w-[23rem] md:w-[30rem]"
                    />{" "}
                  </div>
                  <div className="text-[12px] font-medium my-10">
                    <label className="mt-[-.6rem] bg-white px-2 absolute ml-8  ">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      required
                      className="border border-black outline-none rounded-md p-4 w-[23rem] md:w-[30rem] placeholder:font-semibold"
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
                      className="border border-black outline-none rounded-md p-4 w-[23rem] md:w-[30rem]"
                    />{" "}
                  </div>
                  <div className="text-[12px] font-medium my-10">
                    <label className="mt-[-.6rem] bg-white px-2 absolute ml-8">
                      Confirm Password
                    </label>
                    <input
                      type="text"
                      required
                      className="border border-black outline-none rounded-md p-4 w-[23rem] md:w-[30rem]"
                    />{" "}
                  </div>
                  <div className="text-[12px] font-medium my-10">
                    <label className="mt-[-.6rem] bg-white px-2 absolute ml-8">
                      Corporate email
                    </label>
                    <input
                      type="text"
                      required
                      className="border border-black outline-none rounded-md p-4 w-[23rem] md:w-[30rem]"
                    />{" "}
                  </div>
                  <div className="text-[12px] font-medium my-10">
                    <label className="mt-[-.6rem] bg-white px-2 absolute ml-8">
                      Company Address
                    </label>
                    <input
                      type="text"
                      required
                      className="border border-black outline-none rounded-md p-4 w-[23rem] md:w-[30rem]"
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
                    className="bg-[#66cc66] py-[.8rem] text-sm font-medium px-10 md:w-[30rem] w-[23rem] flex md:mx-auto justify-center rounded-md border-[#66cc66] transition-all duration-500 text-white hover:bg-transparent hover:text-black hover:border-black border-[1px] hover:translate-x-1"
                  >
                    Create Account
                  </Link>

                  <div className="flex space-x-2 my-4 mx-auto justify-center">
                    <p className="text-[#141414] text-sm font-semibold">
                      Already have an account?
                    </p>
                    <span
                      onClick={handleCreateAccount}
                      className="text-red-600 text-sm font-semibold cursor-pointer transition-all duration-200 hover:underline"
                    >
                      Log In!
                    </span>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
