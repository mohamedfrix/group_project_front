"use client";

import { useRef } from "react";

export default function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <div className="flex flex-col gap-8 h-full w-full justify-center pr-20 pl-10">
      <div className="flex flex-col gap-1">
        <div className="text-2xl font-lexend font-bold">
          Log in to your account
        </div>
        <div className="text-[14px] font-lexend font-medium opacity-70">
          Enter your credientials to access your account
        </div>
      </div>
      <div className="flex flex-col gap-12 p-3">
        <div className=" flex flex-col gap-3 ">
          <div className="font-lexend text-1xl font-bold">Email</div>
          <input
            type="text"
            ref={emailRef}
            className="border-1 border-[#9B9B9B] rounded-[15px] p-3 font-lexend focus:border-primary focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <div className="flex flex-row justify-between">
            <div className="font-lexend text-1xl font-bold">Password</div>
            <div className="font-lexend text-1xl font-medium text-primary">
              Forgot password ?
            </div>
          </div>
          <input
            type="password"
            ref={passwordRef}
            className="border-1 border-[#9B9B9B] rounded-[15px] p-3 font-lexend focus:border-primary focus:outline-none "
            placeholder="Enter your email"
          />
        </div>
        <div className="bg-primary p-3 font-lexend text-white rounded-[10px] flex justify-center items-center cursor-pointer">
          Log in
        </div>
      </div>
    </div>
  );
}
