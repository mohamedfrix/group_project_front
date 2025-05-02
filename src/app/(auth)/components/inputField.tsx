export default function InputField({
  label,
  type,
  placeholder,
}: InputFieldProps) {
  return (
    <>
      <div className="text-sm font-bold font-lexend ">{label}</div>
      <input
        type={type}
        placeholder={placeholder}
        className="border-1 border-[#9B9B9B] rounded-[15px] p-2 font-lexend focus:border-primary focus:outline-none text-sm"
      />
    </>
  );
}
