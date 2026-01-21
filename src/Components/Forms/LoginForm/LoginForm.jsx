"use client";
import { useRouter } from "next/navigation";
import React from "react";

const LoginForm = () => {
  const router = useRouter()
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "demo@login.com" && password === "P@s$W0r3") {
      router.push("/")
    } else {
    }
  };

  return (
    <div className="mt-5 w-full p-5 lg:w-1/3 lg:p-0 mx-auto">
      <form onSubmit={handleLogin} className="">
        <div className="card shadow-2xl">
          <div className="card-body bg-[#191C24]">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
