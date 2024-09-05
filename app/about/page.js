"use client";
import Board from "@/app/_component/Board";
import React, { useEffect, useState } from "react";
import logo from "@/public/greensexlogo.svg";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

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
      <div>
        <div className="">
          <div className="bg-slate-200 h-full lg:min-h-screen md:min-h-full">
            <div className="hidden md:ml-60 bg-white py-8 px-8 shadow-sm md:flex items-center border-b-2 justify-between">
              <h1 className="md:text-2xl font-semibold">About GreenEx</h1>
              <div>
                <div className="flex space-x-1 font-semibold text-sm">
                  <p className="text-gray-500">Hi,</p>
                  <p>#UserName</p>
                </div>
              </div>
            </div>
            <div className="md:hidden bg-white py-8 px-8 shadow-sm flex items-center border-b-2 justify-between">
              <Image src={logo} alt="logo" className="size-[35%]" />
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
                  ? "translate-x-0 fixed transition-transform duration-700 h-dvh bg-black z-10 inset-0 bg-opacity-75"
                  : "-translate-x-full transition-transform duration-700"
              }`}
            ></div>
            <div className="p-8 md:ml-60 text-justify space-y-3">
              <h1 className="font-semibold text-xl py-2">We are GreensEx!</h1>
              <p>
                GreensEx logistics is a value driven technology company based in
                Port Harcourt, Rivers State. We creating a change by connecting
                ideas and providing quality service delivery to our amazing
                clients. At GreensEX every customer matters, and our
                professional team are trained to ensure you get a smooth
                experience.
              </p>

              <p>
                The mission of GreensEx logistics is become a world-class brand
                using Information technology to bridge the gap and create value
                for our customers. Our trusted team is poised to ensure our
                safety standard is a priority. No matter what, we will always
                put you first.
              </p>

              <ul className="list-disc">
                <h1 className="font-semibold py-2">Our Values!</h1>
                <div className="mx-4">
                  <li>Accountability</li>
                  <li>Responsiveness</li>
                  <li>Trust</li>
                  <li>Positive impact</li>
                  <li>Upholding the highest ethical standards</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
