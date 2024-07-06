import Image from "next/image";
import Link from "next/link";
import logo from "@/public/greensexlogo2.svg";

function Board() {
  return (
    <div className="transition-all duration-500 min-h-full w-[15rem] p-2 overflow-auto no-scrollbar z-50 bg-[#022045]">
      <Link href="/">
        <Image src={logo} alt="logo" className="my-4 p-4 size-[90%]" />
      </Link>

      <div className="">
        <Link
          href="/welcome"
          className="text-gray-400 items-center space-x-3  hover:text-white font-semibold hover:bg-blue-500 py-[1rem] px-6 flex transition-all duration-500"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="chart-pie"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 544 512"
            class="svg-inline--fa fa-chart-pie fa-w-17 fa-7x w-6 hover:fill-white"
            // class="w-6 hover:fill-white"
          >
            <g class="fa-group">
              <path
                fill="#546D7F"
                d="M379.86 443.87c6.85 6.85 6.33 18.48-1.57 24.08A238.14 238.14 0 0 1 243 512C114.83 513.59 4.5 408.51.14 280.37-4.1 155.6 87 51.49 206.16 34.65c9.45-1.34 17.84 6.51 17.84 16.06V288z"
                class="fa-secondary"
              ></path>
              <path
                fill="#ffff"
                d="M512 223.2C503.72 103.74 408.26 8.28 288.8 0 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.23-16.8zm15.79 64.8H290.5l158 158c6 6 16 6.53 22.19.68a239.5 239.5 0 0 0 73.13-140.86c1.37-9.43-6.48-17.82-16.03-17.82z"
                class="fa-primary"
              ></path>
            </g>
          </svg>

          <p>Dashboard</p>
        </Link>

        <Link
          href="/dispatch"
          className="text-gray-400 hover:text-white gap-4 font-semibold hover:bg-blue-500 py-4 px-6 flex transition-all duration-500"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="box-alt"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa w-5 fa-box-alt fa-w-14 fa-7x"
            // class=""
          >
            <g class="fa-group">
              <path
                fill="#546D7F"
                className="hover:fill-white"
                d="M256 32l32 128v112a16 16 0 0 1-16 16h-96a16 16 0 0 1-16-16V160l32-128z"
                class="fa-secondary"
              ></path>
              <path
                fill="#ffff"
                d="M446.7 160c.4-.5.5-.7.9-1.2L391.3 53.9A32 32 0 0 0 360.9 32H256l32 128zM160 160l32-128H87.1a32 32 0 0 0-30.4 21.9L.4 158.8c.4.5.5.7.9 1.2zm128 32v80a16 16 0 0 1-16 16h-96a16 16 0 0 1-16-16v-80H0v256a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
          New Dispatch
        </Link>

        <Link
          href="/pending"
          className="text-gray-400 gap-4 items-center hover:text-white font-semibold hover:bg-blue-500 py-[1rem] px-6 flex transition-all duration-500"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="clock"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa w-6 fa-clock fa-w-16 fa-9x"
            // class="w-6 hover:fill-white"
          >
            <g class="fa-group">
              <path
                fill="#546D7F"
                d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                class="fa-secondary"
              ></path>
              <path
                fill="#ffff"
                d="M348.49,321h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
          Pending Orders
        </Link>

        <Link
          href="/history"
          className="text-gray-400 hover:text-white font-semibold gap-4 hover:bg-blue-500 py-4 px-6 flex transition-all duration-500"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="history"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa w-6 fa-history fa-w-16 fa-7x"
            // class="w-5 hover:fill-white"
          >
            <g class="fa-group">
              <path
                fill="#546D7F"
                d="M141.68 400.23a184 184 0 1 0-11.75-278.3l50.76 50.76c10.08 10.08 2.94 27.31-11.32 27.31H24a16 16 0 0 1-16-16V38.63c0-14.26 17.23-21.4 27.31-11.32l49.38 49.38A247.14 247.14 0 0 1 256 8c136.81 0 247.75 110.78 248 247.53S392.82 503.9 256.18 504a247 247 0 0 1-155.82-54.91 24 24 0 0 1-1.84-35.61l11.27-11.27a24 24 0 0 1 31.89-1.98z"
                class="fa-secondary"
              ></path>
              <path
                fill="#ffff"
                d="M288 152v104.35L328.7 288a24 24 0 0 1 4.21 33.68l-9.82 12.62a24 24 0 0 1-33.68 4.21L224 287.65V152a24 24 0 0 1 24-24h16a24 24 0 0 1 24 24z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
          Order History
        </Link>

        <Link
          href="/wallet"
          className="text-gray-400 gap-4 hover:text-white font-semibold hover:bg-blue-500 py-4 px-6 flex transition-all duration-500"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="wallet"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa w-5 fa-wallet fa-w-16 fa-7x"
            // class="w-5 hover:fill-white"
          >
            <g class="fa-group">
              <path
                fill="#546D7F"
                d="M416 272a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm16-240H64A64 64 0 0 0 0 96a32 32 0 0 0 32 32h48a16 16 0 0 1 0-32h384a16 16 0 0 0 16-16 48 48 0 0 0-48-48z"
                class="fa-secondary"
              ></path>
              <path
                fill="#ffff"
                d="M461.2 128H32A32 32 0 0 1 0 96v320a64 64 0 0 0 64 64h397.2c28 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
          Fund Wallet
        </Link>

        <Link
          href="/about"
          className="text-gray-400 gap-4 hover:text-white font-semibold border-b-2 hover:bg-blue-500 py-4 px-6 flex transition-all duration-500"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="book-open"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            class="svg-inline--fa w-5 fa-book-open fa-w-18 fa-9x"
            // class="w-5 hover:fill-white"
          >
            <g class="fa-group">
              <path
                fill="#546D7F"
                d="M576 62.75v337.84c0 16.23-13.13 29.77-30 30.66-49.47 2.6-149.52 12.1-218.7 46.92-10.65 5.36-23.28-1.94-23.28-13.49V100.81a15.37 15.37 0 0 1 7.27-13.17c67.24-41.16 176.16-52.48 231-55.59C560.64 31 576 45 576 62.75z"
                class="fa-secondary"
              ></path>
              <path
                fill="#ffff"
                d="M264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31 0 45 0 62.75V400.6c0 16.24 13.13 29.78 30 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63a15.05 15.05 0 0 0-7.25-12.99z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
          About GreenEx
        </Link>

        <Link
          href="/support"
          className="text-gray-400 gap-4 items-center hover:text-white font-semibold hover:bg-blue-500 px-6 py-4 flex transition-all duration-500"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="user-headset"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa w-5 fa-user-headset fa-w-14 fa-9x"
            // class="w-5 hover:fill-white"
          >
            <g class="fa-group">
              <path
                fill="#546D7F"
                d="M416 192v16a112.15 112.15 0 0 1-112 112h-96a32 32 0 0 1 0-64h32a32 32 0 0 1 32 32h32a80.09 80.09 0 0 0 80-80v-16c0-88.22-71.78-160-160-160S64 103.78 64 192v16a16 16 0 0 1-32 0v-16C32 86.13 118.13 0 224 0s192 86.13 192 192z"
                class="fa-secondary"
              ></path>
              <path
                fill="#ffff"
                d="M320 352h-23.1a174.1 174.1 0 0 1-145.8 0H128A128 128 0 0 0 0 480a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32 128 128 0 0 0-128-128zm-175.65-60.53c-.06-1.17-.35-2.28-.35-3.47a64.07 64.07 0 0 1 64-64h32a64 64 0 0 1 55.41 32H304a48.05 48.05 0 0 0 48-48v-16a128 128 0 0 0-256 0c0 40.42 19.1 76 48.35 99.47z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
          Support
        </Link>

        <Link
          href="/setting"
          className="text-gray-400 gap-4 hover:text-white font-semibold hover:bg-blue-500 px-6 py-3 flex transition-all duration-500"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="cog"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa w-5 fa-cog fa-w-16 fa-9x"
            // class="w-5 hover:fill-white"
          >
            <g class="fa-group">
              <path
                fill="#546D7F"
                d="M487.75 315.6l-42.6-24.6a192.62 192.62 0 0 0 0-70.2l42.6-24.6a12.11 12.11 0 0 0 5.5-14 249.2 249.2 0 0 0-54.7-94.6 12 12 0 0 0-14.8-2.3l-42.6 24.6a188.83 188.83 0 0 0-60.8-35.1V25.7A12 12 0 0 0 311 14a251.43 251.43 0 0 0-109.2 0 12 12 0 0 0-9.4 11.7v49.2a194.59 194.59 0 0 0-60.8 35.1L89.05 85.4a11.88 11.88 0 0 0-14.8 2.3 247.66 247.66 0 0 0-54.7 94.6 12 12 0 0 0 5.5 14l42.6 24.6a192.62 192.62 0 0 0 0 70.2l-42.6 24.6a12.08 12.08 0 0 0-5.5 14 249 249 0 0 0 54.7 94.6 12 12 0 0 0 14.8 2.3l42.6-24.6a188.54 188.54 0 0 0 60.8 35.1v49.2a12 12 0 0 0 9.4 11.7 251.43 251.43 0 0 0 109.2 0 12 12 0 0 0 9.4-11.7v-49.2a194.7 194.7 0 0 0 60.8-35.1l42.6 24.6a11.89 11.89 0 0 0 14.8-2.3 247.52 247.52 0 0 0 54.7-94.6 12.36 12.36 0 0 0-5.6-14.1zm-231.4 36.2a95.9 95.9 0 1 1 95.9-95.9 95.89 95.89 0 0 1-95.9 95.9z"
                class="fa-secondary"
              ></path>
              <path
                fill="#ffff"
                d="M256.35 319.8a63.9 63.9 0 1 1 63.9-63.9 63.9 63.9 0 0 1-63.9 63.9z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
          Settings
        </Link>

        <Link
          href="/"
          className="text-gray-400 gap-4 hover:text-white font-semibold hover:bg-blue-500 px-6 py-4 flex transition-all duration-500"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="sign-out"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa w-5 fa-sign-out fa-w-16 fa-9x"
            // class="w-5 hover:fill-white"
          >
            <g class="fa-group">
              <path
                fill="#546D7F"
                d="M180 448H96a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h84a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12H96a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h84a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12z"
                class="fa-secondary"
              ></path>
              <path
                fill="#ffff"
                d="M353 88.3l151.9 150.6a24 24 0 0 1 0 34.1l-152 150.8a24.08 24.08 0 0 1-33.9-.1l-21.9-21.9a24.07 24.07 0 0 1 .8-34.7l77.6-71.1H184a23.94 23.94 0 0 1-24-24v-32a23.94 23.94 0 0 1 24-24h191.5l-77.6-71.1a24 24 0 0 1-.7-34.6l21.9-21.9a24 24 0 0 1 33.9-.1z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Board;
