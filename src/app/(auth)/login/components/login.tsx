"use client";

import { useRef } from "react";
import InputField from "../../components/inputField";

export default function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <div className="flex flex-col gap-8 h-full w-full justify-center pr-20 pl-10 overflow-y-auto">
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
          <InputField
            label="Email"
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="bg-primary p-3 font-lexend text-white rounded-[10px] flex justify-center items-center cursor-pointer">
          Log in
        </div>
      </div>
    </div>
  );
}
