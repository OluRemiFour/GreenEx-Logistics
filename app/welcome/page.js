"use client";
import logo from "@/public/greensexlogo.svg";
import Board from "@/app/_component/Board";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Welcome = () => {
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
      {openNavSmall && (
        <div
          className={`fixed z-50 h-full transition-transform duration-500 ${
            openNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Board />
        </div>
      )}
      {!openNavSmall && (
        <div className="fixed h-full z-50">
          <Board />
        </div>
      )}
      <div className="bg-slate-200 h-full lg:min-h-screen md:min-h-full">
        <div className="hidden md:ml-60 bg-white py-8 px-8 shadow-sm md:flex items-center border-b-2 justify-between">
          <h1 className="md:text-2xl font-semibold">Welcome</h1>
          <div>
            <div className="flex space-x-1 font-semibold text-sm">
              <p className="text-gray-500">Hi,</p>
              <p>John</p>
            </div>
          </div>
        </div>
        <div className="md:hidden fixed top-0 bg-white py-8 px-8 shadow-sm flex items-center border-b-2 justify-between">
          <Link href="/">
            <Image src={logo} alt="logo" className="size-[40%]" />
          </Link>
          <div>
            <svg
              onClick={handleNavbar}
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="burger1"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              ></path>
            </svg>
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
        <div className="grid md:grid-cols-2 md:ml-48 mt-20 mb-4 md:my-8 gap-3 md:px-6 lg:px-[16rem]">
          <div className="text-center py-6 cursor-pointer transition-all duration-500 hover:scale-105 rounded-md bg-white mx-1 my-1">
            <h1 className="font-medium py-4">
              <a href="dispatch">Create New Dispatch</a>
            </h1>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="box-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-inline--fa fa-box-alt fa-w-14 fa-7x size-14 mx-auto text-blue-500"
            >
              <g className="fa-group">
                <path
                  fill="#BFDDFC"
                  d="M256 32l32 128v112a16 16 0 0 1-16 16h-96a16 16 0 0 1-16-16V160l32-128z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M446.7 160c.4-.5.5-.7.9-1.2L391.3 53.9A32 32 0 0 0 360.9 32H256l32 128zM160 160l32-128H87.1a32 32 0 0 0-30.4 21.9L.4 158.8c.4.5.5.7.9 1.2zm128 32v80a16 16 0 0 1-16 16h-96a16 16 0 0 1-16-16v-80H0v256a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
          </div>

          <div className="text-center py-6 cursor-pointer transition-all duration-500 hover:scale-105 rounded-md bg-white mx-1 my-1">
            <h1 className="font-medium py-4">
              <a href="pending">View Pending Orders</a>
            </h1>

            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="clock"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa  fa-clock fa-w-16 fa-9x size-14 mx-auto text-[#F64E60]"
            >
              <g className="fa-group">
                <path
                  fill="#f9c6cc"
                  d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                  className="fa-secondary tex-[#]"
                ></path>
                <path
                  fill="currentColor"
                  d="M348.49,321h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                  className="fa-primary tex-[#F64E60]"
                ></path>
              </g>
            </svg>
          </div>

          <div className="text-center py-6 cursor-pointer transition-all duration-500 hover:scale-105 rounded-md bg-white mx-1 my-1">
            <h1 className="font-medium py-4">
              <a href="order">View Order History</a>
            </h1>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="history"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-history fa-w-16 fa-7x size-14 mx-auto text-[#ffa800]"
            >
              <g className="fa-group">
                <path
                  fill="#FBE1AF"
                  d="M141.68 400.23a184 184 0 1 0-11.75-278.3l50.76 50.76c10.08 10.08 2.94 27.31-11.32 27.31H24a16 16 0 0 1-16-16V38.63c0-14.26 17.23-21.4 27.31-11.32l49.38 49.38A248 248 0 1 1 120 439.44a24 24 0 0 1 21.68-39.21z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M288 154v61.16l-51.33 51.33a24 24 0 0 0 0 33.94l11.32 11.32a24 24 0 0 0 33.94 0L384 224.49V154a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
          </div>

          <div className="text-center py-6 cursor-pointer transition-all duration-500 hover:scale-105 rounded-md bg-white mx-1 my-1">
            <h1 className="font-medium py-4">
              <a href="wallet">Fund Your Wallet</a>
            </h1>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="wallet"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="svg-inline--fa fa-wallet fa-w-16 fa-7x size-14 mx-auto text-[#66CC66]"
            >
              <g class="fa-group">
                <path
                  fill="#CEECCE"
                  d="M416 272a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm16-240H64A64 64 0 0 0 0 96a32 32 0 0 0 32 32h48a16 16 0 0 1 0-32h384a16 16 0 0 0 16-16 48 48 0 0 0-48-48z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M461.2 128H32A32 32 0 0 1 0 96v320a64 64 0 0 0 64 64h397.2c28 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
