import Image from "next/image";
import logo from "@/assets/logo_horizonal.svg";
import background from "@/assets/pc.png";
import SigninForm from "@/app/(auth)/signin/components/signin";

export default function Signin() {
  return (
    <>
      <div className="flex flex-row h-screen w-full">
        <div className="bg-primary-light grow-0 shrink basis-[55%] relative">
          <div className="flex flex-col gap-2 mt-14 ml-12">
            <div className="text-3xl font-lexend text-primary font-bold">
              Join us Now !
            </div>
            <div className="text-sm font-lexend font-bold ">
              Welcome to ResearchCollab! where students and research teams
              connect, collaborate, <br />
              and grow together. Explore inspiring projects and join a community
              driven by discovery.
            </div>
          </div>
          <Image
            src={background}
            alt="any"
            className="object-cover absolute left-[-50%] bottom-[0%]"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
        <div className="flex flex-col grow shrink basis-[45%] justify-center items-start">
          <Image src={logo} alt="any" className="w-48 p-3" />
          <SigninForm />
        </div>
      </div>
    </>
  );
}
