"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import Link from "next/link";

export default function Loginform() {
  const [cookies, setCookie, removeCookie] = useCookies([
    "authToken",
    "email",
    "id",
  ]);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<null | string>(null);

  console.log(cookies);

  const submitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const response = await fetch("/api/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const results = await response.json();
    console.log(results);

    if (results.error) {
      setError(results.error);
    } else {
      setCookie("authToken", results.token);
      setCookie("email", results.email);
      setCookie("id", results.id);
    }
  };
  return (
    <div className="bg-[#3BB77E] w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="w-2/3 max-w-[450px] py-16 px-12 bg-white rounded-md shadow-sm flex flex-col justify-center">
        <form className="flex flex-col gap-3" onSubmit={submitForm}>
          <h1 className="text-2xl text-center font-semibold my-4">Login</h1>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="border-2 p-3 rounded-md"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="border-2 p-3 rounded-md"
            type="password"
            placeholder="Enter your password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {error && <p className="text-sm text-red-500 mt-4">{error}</p>}
          <input
            type="submit"
            required
            className="hover:cursor-pointer my-4 bg-[#3BB77E] w-full py-3 rounded-md shadow-sm text-white"
          ></input>

          <p className="text-sm">
            You do not have an account yet?{" "}
            <Link href={"/"}>
              <span className="hover:cursor-pointer text-[#3BB77E]">
                Signup
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
