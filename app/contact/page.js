import Navigation from "../_component/Navigation";

export default function Page() {
  return (
    <div className="m-8">
      <Navigation />
      <div className="py-10 md:px-32 md:flex justify-around">
        <div>
          <h1 className="text-[16px] font-semibold py-4">
            Have Issues? Send Us a Message!
          </h1>
          <div className="space-y-4">
            <div className="">
              <p className="text-[12px] font-semibold">Your Email</p>
              <input
                required
                type="text"
                className="border border-slate-300 outline-none rounded-md p-2 w-[20rem]"
              />
            </div>

            <div>
              <p className="text-[12px] font-semibold">Subject</p>
              <input
                required
                type="text"
                className="border border-slate-300 outline-none rounded-md p-2 w-[20rem]"
              />
            </div>
            <div>
              <p className="text-[12px]  font-semibold">Message</p>
              <textarea
                required
                type="text"
                className="border border-slate-300 outline-none rounded-md p-2 w-[20rem]"
              />
            </div>
          </div>
          <button className="bg-[#66cc66] py-4 text-sm px-[6rem] my-8 font-semibold flex w-[20rem] rounded-md border-[#66cc66] transition-all duration-500 text-white hover:bg-transparent hover:text-black hover:border-black border-[1px] hover:translate-x-1">
            Send message
          </button>
        </div>

        <div>
          <h1 className="text-[16px] font-semibold py-4">Contact Details</h1>
          <p className="text-[#66cc66] font-semibold text-[16px]">
            +234 - 000 000 0001
          </p>
        </div>
      </div>
    </div>
  );
}
