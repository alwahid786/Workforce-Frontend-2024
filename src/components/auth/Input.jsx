import PropTypes from 'prop-types';

const Input = ({ label, type, id, change, click, name, placeholder, error }) => {
  return (
    <div className="mb-4">
      <label className="text-[#000] text-base mb-2 block">{label}</label>
      <input
        onChange={change}
        onClick={click}
        type={type}
        id={id}
        name={name}
        className={`bg-[#f7fbfe] border ${error ? 'border-red-500' : 'border-[#e2e5ff]'} rounded-[14px] w-full h-[60px] md:h-[80px] focus:outline-none px-4`}
        placeholder={placeholder}
      />
      {error && <span className="text-red-500 text-sm mt-1 block">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  click: PropTypes.func,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  click: () => {},
  placeholder: '',
  error: '',
};

export default Input;
