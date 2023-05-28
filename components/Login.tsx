"use client";
import { LOGO } from "@/app/assets";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div
      className="bg-[#11A37F] h-screen
     flex flex-col items-center justify-center text-center"
    >
      <Image
        src={LOGO}
        alt="logo"
        width={250}
        height={250}
        className="fill-red-700"
      />
      <button className="text-white font-bold text-3xl animate-pulse">
        Sign In to use ChatGPT
      </button>
    </div>
  );
};

export default Login;
