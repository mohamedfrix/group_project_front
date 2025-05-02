import LoginForm from "./components/login";
import Image from "next/image";
import logo from "@/assets/logo_horizonal.svg";
import background from "@/assets/pc.png";

export default function Login() {
  return (
    <>
      <div className="flex flex-row h-screen w-full">
        <div className="flex flex-col grow shrink basis-[45%] justify-end items-start">
          <Image src={logo} alt="any" className="w-48 p-3" />
          <LoginForm />
        </div>
        <div className="bg-primary-light grow-0 shrink basis-[55%] relative overflow-hidden">
          <div className="flex flex-col gap-2 mt-14 ml-12">
            <div className="text-3xl font-lexend text-primary font-bold">
              Welcome back !
            </div>
            <div className="text-sm font-lexend font-bold ">
              Welcome back to ResearchCollab! Discover the latest breakthroughs,
              student <br />
              achievements, and exciting research updates happening across our
              community
            </div>
          </div>
          <Image
            src={background}
            alt="any"
            className="object-cover absolute right-[-50%] bottom-[0%]"
          />
        </div>
      </div>
    </>
  );
}
