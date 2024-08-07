const Input = ({
  label,
  type,
  id,
  change,
  click,
  name,
  placeholder,
  error,
  height,
  labelWeight
}) => {
  return (
    <div className="mb-4">
      <label className={`text-[#000] text-base mb-2 block ${labelWeight ? labelWeight : 'font-normal'}`}>{label}</label>
      <input
        onChange={change}
        onClick={click}
        type={type}
        id={id}
        name={name}
        className={`bg-[#7bc0f726] border ${
          error ? "border-red-500" : "border-[#e2e5ff]"
        } rounded-[14px] w-full ${height ? height : 'h-[60px] md:h-[80px]'} focus:outline-none px-4`}
        placeholder={placeholder}
      />
      {error && (
        <span className="text-red-500 text-sm mt-1 block">{error}</span>
      )}
    </div>
  );
};

export default Input;
