import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  let errorMessage;

  if (googleError) {
    errorMessage = <p className="text-red-600">{googleError?.message}</p>;
  }

  if (googleLoading) {
    return <h2>Loading...</h2>;
  }

  if (googleUser) {
    console.log("success");
  }
  return (
    <div>
      <button
      className="btn btn-accent btn-outline"
      onClick={() => signInWithGoogle()}
    >
      Continue with Google
    </button>
    </div>
  );
};

export default SocialLogin;
