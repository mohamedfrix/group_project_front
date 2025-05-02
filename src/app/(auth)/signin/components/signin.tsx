import InputField from "../../components/inputField";

export default function SigninForm() {
  const iputFieldProps: InputFieldProps[] = [
    {
      label: "Full name",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      label: "Email",
      type: "text",
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
    {
      label: "Confirm Password",
      type: "password",
      placeholder: "Re-enter your password",
    },
  ];
  return (
    <>
      <div className="flex flex-col h-full w-full gap-14 justify-center items-start ml-10 ">
        <div className="flex flex-col gap-2 w-full">
          <div className="text-2xl font-lexend font-bold">
            Create new account !
          </div>
          <div className="text-[14px] font-medium opacity-70 font-lexend ">
            Enter your relevant information
          </div>
        </div>
        <div className="w-full pl-5">
          <div className="flex flex-col gap-4 w-[65%]">
            {iputFieldProps.map((inputFieldProps, index) => (
              <InputField
                key={index}
                label={inputFieldProps.label}
                type={inputFieldProps.type}
                placeholder={inputFieldProps.placeholder}
              />
            ))}
          </div>
        </div>
        <div className="w-[65%] pl-5">
          <div className="bg-primary p-3 font-lexend text-white rounded-[10px] flex justify-center items-center cursor-pointer">
            Log in
          </div>
        </div>
      </div>
    </>
  );
}
