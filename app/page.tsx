"use client";

import { useState } from "react";
import Loginform from "./Components/form/Loginform";
import Signupform from "./Components/form/Signupform";

export default function Home() {
  const [status, setStatus] = useState("sign-up");
  return <main>{status === "login" ? <Loginform /> : <Signupform />}</main>;
}
