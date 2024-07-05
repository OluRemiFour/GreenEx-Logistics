"use client";
import React, { useEffect, useState } from "react";
import logo from "@/public/greensexlogo.svg";
import Image from "next/image";
import Board from "@/app/_component/Board";
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
      <div className="bg-slate-200 h-dvh">
        <div className="flex flex-col md:ml-60 bg-slate-200">
          <div className="hidden  bg-white py-8 px-8 shadow-sm md:flex items-center border-b-2 justify-between">
            <h1 className="md:text-2xl font-semibold">Settings</h1>
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
            </Link>
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
          <div className="mx-auto my-16 rounded-md p-10 flex flex-col justify-center bg-white">
            <h1 className="font-semibold">Change Password</h1>
            <form>
              <div className="text-[12px] font-medium my-8 target:text-red-500">
                <label className="mt-[-.6rem] bg-white px-2 absolute ml-8">
                  New Password
                </label>
                <input
                  type="password"
                  required
                  className="border border-black outline-none rounded-md py-3 md:py-4 px-4 md:w-[25rem]"
                />{" "}
              </div>
              <div className="text-[12px] font-medium my-10">
                <label className="mt-[-.6rem] bg-white px-2 absolute ml-8">
                  Confirm Password
                </label>
                <input
                  type="password"
                  required
                  className="border border-black outline-none rounded-md py-3 md:py-4 px-4 md:w-[25rem]"
                />{" "}
              </div>
              <Link
                href="/"
                className="bg-[#66cc66] py-[.8rem] text-sm font-medium p py-3xmd:-y10 px-4 md:w-[25rem] flex mx-auto justify-center rounded-md border-[#66cc66] transition-all duration-500 text-white border-[1px] hover:translate-x-1"
              >
                Change Password
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
