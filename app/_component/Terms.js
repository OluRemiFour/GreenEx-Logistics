import React from "react";

function Terms() {
  return (
    // <div className="bg-black h-full relative ">
    <div className="z-50 rounded-xl w-fit absolute flex mx-[30rem] bg-[#fafafa] top-16 items-center">
      <div className="flex-col justify-center items-center mx-auto">
        <h1 className="mx-auto rounded-t-xl py-6 border-b-4 text-xl font-semibold bg-[#E8F5E8] text-center">
          Our terms and conditions
        </h1>
        <div>
          <div className="px-10 text-[12px]">
            <h3 className="underline py-4">Indemnity clause</h3>
            <ul className="space-y-2">
              <li className="list-disc">
                The client shall not transport or disguise for delivery through
                the company any illegal goods or substance as prohibibited by
                the laws (constitution) of the Federal Republic of Nigeria.
              </li>
              <li className="list-disc">
                The client further agrees that all sealed item(s) shall not
                differ from what is declared in the manifest of delivery.
              </li>
            </ul>
          </div>

          <div className="px-10 text-[12px] ">
            <h3 className="underline py-4">terms and conditions</h3>
            <ul className="space-y-2">
              <li className="list-disc">
                Client pledges to be respectful to our staff. Greens365 has zero
                tolerance to abuse or violence towards staff.
              </li>
              <li className="list-disc">
                All Deliveries once picked up that get cancelled are non
                refundable.
              </li>
              <li className="list-disc">
                In cases where customers have paid and changed their drop-off
                location, 20% will be deducted from the actual service charge
                for that order
              </li>
              <li className="list-disc">
                All cancellations must be done via whatsapp or phone call.
              </li>
              <li className="list-disc">
                Customers will be given 5 minutes allowance of delay upon
                Greens365 rider arriving at pick up point, after which a penalty
                of N50/Min will commence till an item is given to the rider.
              </li>
            </ul>
          </div>
        </div>
        <button className="mx-auto rounded-lg font-semibold bg-[#66cc66] py-4 w-full mt-8 flex justify-center">
          Accept & close
        </button>
      </div>
    </div>
    // </div>
  );
}

export default Terms;
