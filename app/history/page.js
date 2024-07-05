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
      <div className="bg-slate-200 h-dvh">
        <div className="bg-slate-200">
          {" "}
          <div className="hidden md:ml-60 bg-white py-8 px-8 shadow-sm md:flex items-center border-b-2 justify-between">
            <h1 className="md:text-2xl font-semibold">Order History</h1>
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
                  class="burger1 transition-all duration-500"
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
          <p className="p-8 md:ml-60">You have no order history.</p>
        </div>
      </div>
    </>
  );
}

export default Page;
