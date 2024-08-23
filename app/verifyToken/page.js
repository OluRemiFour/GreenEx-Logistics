"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

function Page() {
  const searchParams = useSearchParams();
  const token = searchParams.get("verify_token");

  console.log(token);

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  async function sendToken() {
    const data = await fetch(`${baseUrl}/api/auth/verify-email/?${token}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  return <div>Page</div>;
}

export default Page;
// base_url/api/auth/verify-email/?{token}
