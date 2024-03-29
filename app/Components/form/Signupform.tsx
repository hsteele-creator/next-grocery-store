"use client";

import { Suspense, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signupform() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState<null | string>(null);

  console.log(firstName, lastName);

  const submitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      setPassword("");
      setEmail("");
      setConfirmPassword("");
      router.push("/sign-in");
    } else {
      setError("Passwords do not macth!");
    }
  };
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <div className="bg-[#3BB77E] w-[100vw] h-[100vh] flex items-center justify-center">
        <div className="w-2/3 max-w-[450px] py-16 px-12 bg-white rounded-md shadow-sm flex flex-col justify-center">
          <form className="flex flex-col gap-3" onSubmit={submitForm}>
            <h1 className="text-2xl text-center font-semibold my-4">Signup</h1>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                className="border-2 p-3 rounded-md w-1/2"
                required
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              ></input>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                className="border-2 p-3 rounded-md w-1/2"
                required
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              ></input>
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="border-2 p-3 rounded-md"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
            <input
              className="border-2 p-3 rounded-md"
              type="password"
              placeholder="Enter your password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            <input
              className="border-2 p-3 rounded-md"
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            ></input>
            {error && <p className="text-sm text-red-500 mt-4">{error}</p>}
            <input
              type="submit"
              required
              className="hover:cursor-pointer my-4 bg-[#3BB77E] w-full py-3 rounded-md shadow-sm text-white"
            ></input>

            <p className="text-sm">
              Already have an account?{" "}
              <Link href={"/sign-in"}>
                <span className="hover:cursor-pointer text-[#3BB77E]">
                  Login
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Suspense>
  );
}
