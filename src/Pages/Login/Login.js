import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <div className="flex justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl mb-12">Login</h2>
          <form >
          <input type="text" placeholder="Email" name="email" class="input input-bordered w-full" />
          <input type="text" placeholder="Password" name="password" class="input input-bordered w-full my-4" />
          <input type="submit" value="Login" class="btn btn-accent w-full" />
          </form>

          <p className="text-sm">New to Doctors Portal? <span className="text-secondary">Create new account</span></p>

          <div class="divider">OR</div>

          <button class="btn btn-accent btn-outline" onClick={()=>signInWithGoogle()}>Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
