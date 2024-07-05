import React from "react";
import Navigation from "../_component/Navigation";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";

function Page() {
  return (
    <div className="md:m-8 m-4">
      <Navigation />

      <div className="mt-10 md:mt-auto">
        <h1 className="border border-b-4 border-[#c5c7cd] text-[16px] bg-[#fcfcfc] shadow shadow-[#c0c0c0] font-medium mx-auto md:px-28 lg:px-36 md:py-2 py-1 mt-4 md:mt-auto text-center rounded-md md:w-[50%]">
          Calculate Dispatch Cost
        </h1>

        <div className="space-y-2 mx-auto my-6 rounded-md md:w-[40%] w-[90%] border-2 bg-[#fcfcfc] border-[#c0c0c0]">
          <div className="flex font-semibold gap-1 items-center py-1 text-sm border-b-2 border-[#c0c0c0] p-2">
            <RiMotorbikeFill />
            BIKE
          </div>
          <div className="flex gap-5 items-center border-b-2 border-[#c0c0c0] text-sm">
            <div className="gap-2 p-2 flex flex-col text-gray-500">
              <p>Distance:</p>
              <p>Rate:</p>
              <p>Base Price:</p>
              <p>Base Distance:</p>
              <p>VAT:</p>
            </div>
            <div className="flex flex-col gap-2 text-gray-500">
              <p>&mdash;</p>
              <p>N60 (per km)</p>
              <p>N600</p>
              <p>10km</p>
              <p>- (7.5%)</p>
            </div>
          </div>

          <div className="flex p-2 justify-between pt-2 text-sm font-semibold">
            <p>TOTAL PRICE:</p>
            <p className="text-[#66cc66]">N0.00</p>
          </div>
        </div>

        <div className="flex mx-auto justify-center items-center py-6">
          <input
            className="text-sm focus:border-[#66cc66] transition-all duration-500 md:w-auto w-[40%] border font-semibold border-slate-300 outline-none rounded-md py-2 md:px-4 px-2"
            placeholder="Pickup Address"
          />
          <div className="text-[8px] md:px-2 flex space-x-1 text-slate-400">
            <FaCircle className="hidden md:visible" />
            <FaCircle />
            <FaCircle />
            <FaCircle />
          </div>
          <input
            className="text-sm focus:border-[#66cc66] transition-all duration-500 md:w-auto px-2 w-[40%] border font-semibold border-slate-300 outline-none rounded-md py-2 md:px-4"
            placeholder="Drop-off Address"
          />
        </div>
      </div>

      <button className="bg-[#66cc66] md:py-3 py-2 text-sm md:px-20 px-12 font-semibold flex w-fit mx-auto rounded-md border-[#66cc66] transition-all duration-500 text-white hover:bg-transparent hover:text-black hover:border-black border-[1px] hover:translate-x-1 my-3">
        Calculate
      </button>
    </div>
  );
}

export default Page;
