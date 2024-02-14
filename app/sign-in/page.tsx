import { Suspense } from "react"
import Loginform from "../Components/form/Loginform"

export default function SignIn() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Loginform />
      </Suspense>
    );
}