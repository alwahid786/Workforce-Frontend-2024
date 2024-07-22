
const Input = ({ label, type, id, change, click, name , placeholder}) => {
  return (
    <>
      <label className="text-[#000] text-base mb-4 md:mb-6 block">{label}</label>
      <input
        onChange={change}
        onClick={click}
        type={type}
        id={id}
        name={name}
        className="bg-[#f7fbfe] border border-[#e2e5ff] rounded-[14px] w-full h-[60px] md:h-[80px] focus:outline-none px-4"
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
