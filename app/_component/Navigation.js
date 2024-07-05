import React from "react";
import image1 from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

function Navigation() {
  return (
    <>
      <div className="flex flex-col lg:flex-row md:mx-10 items-center gap-1 md:gap-0 md:justify-between">
        <Link href="/">
          <Image
            src={image1}
            placeholder="blur"
            quality={80}
            alt="logo"
            className="hover:translate-y-[-.5rem] transition-all duration-500"
          />
        </Link>

        <div className="flex lg:justify-between text-green-500 font-medium text-[16px] space-x-3">
          <Link href="/contact" className="hover:underline">
            contact us
          </Link>
          <Link href="/pricing" className="hover:underline">
            {" "}
            <li>pricing</li>
          </Link>
        </div>
      </div>

      
      {/* 
     <div className="lg:hidden flex flex-col lg:flex-row md:mx-10 items-center gap-1 md:gap-0 md:justify-between">
        <Link href="/">
          <Image
            src={image1}
            placeholder="blur"
            quality={80}
            alt="logo"
            className="hover:translate-y-[-.5rem] transition-all duration-500"
          />
        </Link>

        <div className="flex lg:justify-between text-green-500 font-medium text-[16px] space-x-3">
          <Link href="/contact" className="hover:underline">
            contact us
          </Link>
          <Link href="/pricing" className="hover:underline">
            {" "}
            <li>pricing</li>
          </Link>
        </div>
      </div> */}
    </>
  );
}

export default Navigation;
