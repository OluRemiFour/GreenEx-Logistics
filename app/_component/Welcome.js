import React from "react";
import logo from "@/public/greensexlogo.svg";
import Image from "next/image";

function Welcome() {
  return (
    <div className="bg-slate-200">
      {" "}
      <div className="hidden bg-white py-8 px-8 shadow-sm md:flex items-center border-b-2 justify-between">
        <h1 className="md:text-2xl font-semibold">Welcome</h1>
        <div>
          <div className="flex space-x-1 font-semibold text-sm">
            <p className="text-gray-500">Hi,</p>
            <p>#UserName</p>
          </div>
        </div>
      </div>
      <div className="md:hidden bg-white py-8 px-8 shadow-sm flex items-center border-b-2 justify-between">
        <Image src={logo} alt="logo" className="size-[50%]" />
        {/* <Image src="../public/illustration1.png" alt="logo" width={50} height={50} /> */}
        <div>
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="burger1"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 8h16M4 16h16"
            ></path>
          </svg>
        </div>
      </div>
      <div className="grid md:grid-cols-2 my-8 gap-3 md:px-6 lg:px-[11rem]">
        <div className="text-center py-6 cursor-pointer transition-all duration-500 hover:scale-105 rounded-md bg-white mx-1 my-1">
          <h1 className="font-medium py-4">Create New Dispatch</h1>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="box-alt"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-box-alt fa-w-14 fa-7x size-14 mx-auto text-blue-500"
          >
            <g class="fa-group">
              <path
                fill="#BFDDFC"
                d="M256 32l32 128v112a16 16 0 0 1-16 16h-96a16 16 0 0 1-16-16V160l32-128z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M446.7 160c.4-.5.5-.7.9-1.2L391.3 53.9A32 32 0 0 0 360.9 32H256l32 128zM160 160l32-128H87.1a32 32 0 0 0-30.4 21.9L.4 158.8c.4.5.5.7.9 1.2zm128 32v80a16 16 0 0 1-16 16h-96a16 16 0 0 1-16-16v-80H0v256a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
        </div>
        <div className="text-center py-6 cursor-pointer transition-all duration-500 hover:scale-105 rounded-md bg-white mx-1 my-1">
          <h1 className="font-medium py-4">View Pending Orders</h1>

          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="clock"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa  fa-clock fa-w-16 fa-9x size-14 mx-auto text-[#F64E60]"
          >
            <g class="fa-group">
              <path
                fill="#f9c6cc"
                d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                class="fa-secondary tex-[#]"
              ></path>
              <path
                fill="currentColor"
                d="M348.49,321h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                class="fa-primary tex-[#F64E60]"
              ></path>
            </g>
          </svg>
        </div>
        <div className="text-center py-6 cursor-pointer transition-all duration-500 hover:scale-105 rounded-md bg-white mx-1 my-1">
          <h1 className="font-medium py-4">View Order History</h1>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="history"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa fa-history fa-w-16 fa-7x size-14 mx-auto text-[#ffa800]"
          >
            <g class="fa-group">
              <path
                fill="#FBE1AF"
                d="M141.68 400.23a184 184 0 1 0-11.75-278.3l50.76 50.76c10.08 10.08 2.94 27.31-11.32 27.31H24a16 16 0 0 1-16-16V38.63c0-14.26 17.23-21.4 27.31-11.32l49.38 49.38A247.14 247.14 0 0 1 256 8c136.81 0 247.75 110.78 248 247.53S392.82 503.9 256.18 504a247 247 0 0 1-155.82-54.91 24 24 0 0 1-1.84-35.61l11.27-11.27a24 24 0 0 1 31.89-1.98z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M288 152v104.35L328.7 288a24 24 0 0 1 4.21 33.68l-9.82 12.62a24 24 0 0 1-33.68 4.21L224 287.65V152a24 24 0 0 1 24-24h16a24 24 0 0 1 24 24z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
        </div>
        <div className="text-center py-6 cursor-pointer transition-all duration-500 hover:scale-105 rounded-md bg-white mx-1 my-1">
          <h1 className="font-medium py-4">Fund Your Wallet</h1>
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
  );
}

export default Welcome;
