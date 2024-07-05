"use client";
import Board from "@/app/_component/Board";
import Link from "next/link";
import logo from "@/public/greensexlogo.svg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

// function Page() {
//   const [openNav, setOpenNav] = useState(false);
//   const [openNavSmall, setOpenNavSmall] = useState(false);

//   function handleNavbar() {
//     setOpenNav((open) => !open);
//   }

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 770) {
//         setOpenNavSmall(true);
//       } else {
//         setOpenNavSmall(false);
//       }
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       {openNavSmall && openNav && (
//         <div className="h-[100%] fixed z-50">
//           <Board />
//         </div>
//       )}
//       {!openNavSmall && (
//         <div className="h-[100%] fixed z-50">
//           <Board />
//         </div>
//       )}
//       <div className="bg-slate-200 md:ml-60 lg:min-h-screen md:min-h-full">
//         <div className="bg-slate-200 h-full min-h-full lg:min-h-screen md:min-h-full">
//           <div className="bg-slate-200 min-h-full overflow-scroll">
//             <div className="hidden bg-white py-8 px-8 shadow-sm md:flex items-center border-b-2 justify-between">
//               <h1 className="md:text-2xl font-semibold">Dispatch</h1>
//               <div>
//                 <div className="flex space-x-1 font-semibold text-sm">
//                   <p className="text-gray-500">Hi,</p>
//                   <p>#UserName</p>
//                 </div>
//               </div>
//             </div>
//             <div className="md:hidden bg-white py-8 px-8 shadow-sm flex items-center border-b-2 justify-between">
//               <Image src={logo} alt="logo" className="size-[35%]" />
//               <div>
//                 <svg
//                   onClick={handleNavbar}
//                   stroke="currentColor"
//                   fill="none"
//                   stroke-width="0"
//                   viewBox="0 0 24 24"
//                   class="burger1"
//                   height="2em"
//                   width="2em"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M4 8h16M4 16h16"
//                   ></path>
//                 </svg>
//               </div>
//             </div>

//             <div className="py-6 px-2 md:px-8 bg-white">
//               <div className="my-8 mx-6 backshadow md:p-10 p-6 rounded-md">
//                 <div className="lg:flex gap-2 my-4 justify-around">
//                   <div>
//                     <div className="pb-6">
//                       <p
//                         htmlFor="item"
//                         className="text-[12px] font-semibold focus:-[#66cc66]"
//                       >
//                         Item
//                       </p>
//                       <input
//                         id="item"
//                         required
//                         type="text"
//                         className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[17rem] md:w-[25rem]"
//                       />
//                     </div>

//                     <div>
//                       <p className="text-[12px] font-semibold">Quantity</p>
//                       <input
//                         required
//                         type="text"
//                         className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[17rem] md:w-[25rem]"
//                       />
//                     </div>

//                     <div className="my-8 space-y-6">
//                       <h1 className="font-semibold text-[24px] py-2">
//                         PICK UP
//                       </h1>
//                       <div>
//                         <p className="text-[12px] font-semibold">Name</p>
//                         <input
//                           required
//                           type="text"
//                           className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[17rem] md:w-[25rem]"
//                         />
//                       </div>
//                       <div>
//                         <p className="text-[12px]  font-semibold">
//                           Phone Number
//                         </p>
//                         <input
//                           required
//                           type="text"
//                           placeholder="+234 -"
//                           className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[17rem] md:w-[25rem]"
//                         />
//                       </div>
//                       <div>
//                         <p className="text-[12px]  font-semibold">Address</p>
//                         <input
//                           type="text"
//                           placeholder="search places..."
//                           className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[17rem] md:w-[25rem]"
//                         />
//                       </div>
//                       <div>
//                         <p className="text-[12px]  font-semibold">
//                           Pickup Landmark
//                         </p>
//                         <input
//                           type="text"
//                           className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[17rem] md:w-[25rem]"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <div>
//                       <p className="text-[12px] font-semibold">Description</p>
//                       <textarea className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none p-2 rounded-md w-[17rem] md:w-[25rem] h-[8rem] required:text-red-600" />
//                     </div>

//                     <div className="my-8 space-y-6">
//                       <h1 className="font-semibold text-[24px] py-2">
//                         DROP OFF
//                       </h1>
//                       <div>
//                         <p className="text-[12px] font-semibold">Name</p>
//                         <input
//                           required
//                           type="text"
//                           className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[17rem] md:w-[25rem]"
//                         />
//                       </div>
//                       <div>
//                         <p className="text-[12px]  font-semibold">
//                           Phone Number
//                         </p>
//                         <input
//                           required
//                           type="text"
//                           placeholder="+234 -"
//                           className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[17rem] md:w-[25rem]"
//                         />
//                       </div>
//                       <div>
//                         <p className="text-[12px]  font-semibold">Address</p>
//                         <input
//                           type="text"
//                           placeholder="search places..."
//                           className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[17rem] md:w-[25rem]"
//                         />
//                       </div>
//                       <div>
//                         <p className="text-[12px] font-semibold">
//                           Dropoff Landmark
//                         </p>
//                         <input
//                           type="text"
//                           className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[17rem] md:w-[25rem]"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <Link
//                   href="/"
//                   className="bg-[#66cc66] py-2.5 text-sm px-20 md:mx-6 mx-auto font-semibold w-fit rounded-md border-[#66cc66] transition-all duration-500 text-white hover:bg-transparent hover:text-black hover:border-black border-[1px] hover:translate-x-1"
//                 >
//                   Proceed
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Page;

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
      <div className="bg-slate-200 md:ml-60 lg:min-h-screen md:min-h-full">
        <div className="bg-slate-200 h-full min-h-full lg:min-h-screen md:min-h-full">
          <div className="bg-slate-200 min-h-full overflow-scroll">
            <div className="hidden bg-white py-8 px-8 shadow-sm md:flex items-center border-b-2 justify-between">
              <h1 className="md:text-2xl font-semibold">Dispatch</h1>
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
            <div className="py-6 px-2 md:px-8 bg-white">
              <div className="my-8 mx-6 backshadow md:p-10 p-6 rounded-md">
                <div className="lg:flex gap-2 my-4 justify-around">
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
                        className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[17rem] md:w-[25rem]"
                      />
                    </div>

                    <div>
                      <p className="text-[12px] font-semibold">Quantity</p>
                      <input
                        required
                        type="text"
                        className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[17rem] md:w-[25rem]"
                      />
                    </div>

                    <div className="my-8 space-y-6">
                      <h1 className="font-semibold text-[24px] py-2">
                        PICK UP
                      </h1>
                      <div>
                        <p className="text-[12px] font-semibold">Name</p>
                        <input
                          required
                          type="text"
                          className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[17rem] md:w-[25rem]"
                        />
                      </div>
                      <div>
                        <p className="text-[12px]  font-semibold">
                          Phone Number
                        </p>
                        <input
                          required
                          type="text"
                          placeholder="+234 -"
                          className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[17rem] md:w-[25rem]"
                        />
                      </div>
                      <div>
                        <p className="text-[12px]  font-semibold">Address</p>
                        <input
                          type="text"
                          placeholder="search places..."
                          className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[17rem] md:w-[25rem]"
                        />
                      </div>
                      <div>
                        <p className="text-[12px]  font-semibold">
                          Pickup Landmark
                        </p>
                        <input
                          type="text"
                          className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[17rem] md:w-[25rem]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <p className="text-[12px] font-semibold">Description</p>
                      <textarea className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none p-2 rounded-md w-[17rem] md:w-[25rem] h-[8rem] required:text-red-600" />
                    </div>

                    <div className="my-8 space-y-6">
                      <h1 className="font-semibold text-[24px] py-2">
                        DROP OFF
                      </h1>
                      <div>
                        <p className="text-[12px] font-semibold">Name</p>
                        <input
                          required
                          type="text"
                          className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[17rem] md:w-[25rem]"
                        />
                      </div>
                      <div>
                        <p className="text-[12px]  font-semibold">
                          Phone Number
                        </p>
                        <input
                          required
                          type="text"
                          placeholder="+234 -"
                          className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[17rem] md:w-[25rem]"
                        />
                      </div>
                      <div>
                        <p className="text-[12px]  font-semibold">Address</p>
                        <input
                          type="text"
                          placeholder="search places..."
                          className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[17rem] md:w-[25rem]"
                        />
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold">
                          Dropoff Landmark
                        </p>
                        <input
                          type="text"
                          className="focus:border-[#66cc66] transition-all duration-500 border border-slate-300 outline-none rounded-md p-2 w-[17rem] md:w-[25rem]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href="/"
                  className="bg-[#66cc66] py-4 text-sm px-20 md:mx-6 mx-auto font-semibold w-fit rounded-md border-[#66cc66] transition-all duration-500 text-white hover:bg-transparent hover:text-black hover:border-black border-[1px] hover:translate-x-1"
                >
                  Proceed
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
