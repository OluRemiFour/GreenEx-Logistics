"use client";
import Board from "@/app/_component/Board";
import React, { useEffect, useState } from "react";
import logo from "@/public/greensexlogo.svg";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

function Page() {
  const [openNav, setOpenNav] = useState(false);
  const [openNavSmall, setOpenNavSmall] = useState(false);

  function handleNavbar() {
    setOpenNav((open) => !open);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 770) {
        setOpenNavSmall(true);
      } else {
        setOpenNavSmall(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`h-[100%] fixed z-50 transition-transform duration-500 ${
          openNavSmall && openNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Board />
      </div>

      {!openNavSmall && (
        <div className="fixed h-full z-50">
          <Board />
        </div>
      )}

      <div className="bg-slate-200 min-h-screen lg:min-h-screen md:min-h-full">
        <div className="flex flex-col md:ml-60 bg-slate-200">
          <div className="hidden bg-white py-8 px-8 shadow-sm md:flex items-center border-b-2 justify-between">
            <h1 className="md:text-2xl font-semibold">Fund Wallet</h1>
            <div>
              <div className="flex space-x-1 font-semibold text-sm">
                <p className="text-gray-500">Hi,</p>
                <p>#UserName</p>
              </div>
            </div>
          </div>
          <div className="md:hidden bg-white py-8 px-8 shadow-sm flex items-center border-b-2 justify-between">
            <Link href="/">
              {" "}
              <Image src={logo} alt="logo" className="size-[40%]" />
            </Link>{" "}
            <div>
              {openNav ? (
                <IoClose
                  className="size-8 transition-all duration-500"
                  onClick={handleNavbar}
                />
              ) : (
                <svg
                  onClick={handleNavbar}
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="burger1"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 8h16M4 16h16"
                  ></path>
                </svg>
              )}
            </div>
          </div>

          <div
            onClick={!openNav ? undefined : handleNavbar}
            className={`${
              openNav
                ? "translate-x-0 fixed top-24 transition-transform duration-700 h-dvh bg-black z-10 inset-0 bg-opacity-75"
                : "-translate-x-full transition-transform duration-700"
            }`}
          ></div>
          <div>
            <div className="my-16 mx-10">
              <div>
                <p className="text-[12px] font-semibold">Amount</p>
                <input
                  required
                  type="number"
                  className="border border-slate-300 bg-transparent outline-none rounded-md p-2 w-[20rem]"
                />
              </div>

              <button className="bg-[#66cc66] py-4 text-sm px-[7.3rem] my-4 font-semibold flex w-[20rem] rounded-md border-[#66cc66] transition-all duration-500 text-white hover:translate-x-1">
                Continue
              </button>
            </div>

            <div className="my-16 mx-10">
              <h1>Wallet History</h1>
              <div>
                <input
                  placeholder="..."
                  type="text"
                  className="border border-slate-300 bg-transparent outline-none rounded-md p-2 w-fit"
                />
              </div>
            </div>

            <div className="my-16 mx-10 flex space-x-28">
              <div className=" text-sm flex-col space-y-4 border-slate-400">
                <p className="font-semibold">Amount:</p>
                <div className="">
                  <p className="font-semibold">NGN 5,000</p>
                  <p className="text-[12px]">June 20th, 2024</p>
                </div>
              </div>
              <div className="text-sm space-y-4 flex-col">
                <p>Status</p>
                <p className="bg-[#66cc66] text-[10px] px-3 font-semibold py-1 rounded-full">
                  CREDIT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Page;
