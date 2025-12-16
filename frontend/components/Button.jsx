

const Button = ({ buttonName, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      {buttonName}
    </button>
  );
};

export default Button;