"use client";

import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

function VerifyTokenComponent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("verify_token");

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

  return <div>Verifying...</div>;
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyTokenComponent />
    </Suspense>
  );
}

// base_url/api/auth/verify-email/?{token}
