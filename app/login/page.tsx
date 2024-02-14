import { Suspense } from "react"
import Loginform from "../Components/form/Loginform"

const Login = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Loginform />
      </Suspense>
    );
}

export default Login