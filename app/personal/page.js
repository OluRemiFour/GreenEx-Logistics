import Link from "next/link";
import Navigation from "../_component/Navigation";
import { IoIosArrowBack } from "react-icons/io";

export default function Page() {
  return (
    <div className="md:m-8 m-6">
      <Navigation />

      <div className="py-8 md:px-28">
        <Link href="/">
          <IoIosArrowBack size={24} className="mx-6 cursor-pointer" />
        </Link>
        <div className="text-center space-y-2">
          <h1 className="text-[24px] font-semibold">Request Dispatch</h1>
          <p className="">
            Request a dispatch to pick and deliver your parcel in no time.
          </p>
        </div>

        <div className="my-8 md:mx-6 backshadow p-10 rounded-md">
          <div className="md:flex my-4 gap-6 justify-around">
            <div>
              <div className="pb-6">
                <p
                  htmlFor="item"
                  className="text-[12px] font-semibold focus:-[#66cc66]"
                >
                  Item
                </p>
                <input
                  id="item"
                  required
                  type="text"
                  className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[16rem] md:w-[25rem]"
                />
              </div>

              <div>
                <p className="text-[12px] font-semibold">Quantity</p>
                <input
                  required
                  type="text"
                  className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[16rem] md:w-[25rem]"
                />
              </div>

              <div className="my-8 space-y-6">
                <h1 className="font-semibold md:text-[24px] py-2">PICK UP</h1>
                <div>
                  <p className="text-[12px] font-semibold">Name</p>
                  <input
                    required
                    type="text"
                    className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[16rem] md:w-[25rem]"
                  />
                </div>
                <div>
                  <p className="text-[12px]  font-semibold">Phone Number</p>
                  <input
                    required
                    type="text"
                    placeholder="+234 -"
                    className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[16rem] md:w-[25rem]"
                  />
                </div>
                <div>
                  <p className="text-[12px]  font-semibold">Address</p>
                  <input
                    type="text"
                    placeholder="search places..."
                    className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[16rem] md:w-[25rem]"
                  />
                </div>
                <div>
                  <p className="text-[12px]  font-semibold">Pickup Landmark</p>
                  <input
                    type="text"
                    className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[16rem] md:w-[25rem]"
                  />
                </div>
              </div>
            </div>

            <div>
              <div>
                <p className="text-[12px] font-semibold">Description</p>
                <textarea className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none p-2 rounded-md w-[16rem] md:w-[25rem] h-[8rem] required:text-red-600" />
              </div>

              <div className="my-8 space-y-6">
                <h1 className="font-semibold md:text-[24px] py-2">DROP OFF</h1>
                <div>
                  <p className="text-[12px] font-semibold">Name</p>
                  <input
                    required
                    type="text"
                    className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[16rem] md:w-[25rem]"
                  />
                </div>
                <div>
                  <p className="text-[12px]  font-semibold">Phone Number</p>
                  <input
                    required
                    type="text"
                    placeholder="+234 -"
                    className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[16rem] md:w-[25rem]"
                  />
                </div>
                <div>
                  <p className="text-[12px]  font-semibold">Address</p>
                  <input
                    type="text"
                    placeholder="search places..."
                    className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[16rem] md:w-[25rem]"
                  />
                </div>
                <div>
                  <p className="text-[12px] font-semibold">Dropoff Landmark</p>
                  <input
                    type="text"
                    className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[16rem] md:w-[25rem]"
                  />
                </div>
              </div>
            </div>
          </div>
          <Link
            href="/"
            className="bg-[#66cc66] md:py-4 py-2 text-sm md:px-20 px-12 font-semibold f w-[16rem]lex w-fit mx-auto rounded-md border-[#66cc66] transition-all duration-500 text-white hover:bg-transparent hover:text-black hover:border-black border-[1px] hover:translate-x-1"
          >
            Proceed
          </Link>
        </div>
      </div>
    </div>
  );
}
