import { Suspense } from "react";
import Signupform from "../Components/form/Signupform";

export default function Signup() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Signupform />
    </Suspense>
  );
}
