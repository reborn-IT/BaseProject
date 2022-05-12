import React from "react";

function StandartButton({ children, styles, extraTailwindClasses = "", clickHandler }) {
  return (
    <button
      type="button"
      className={`become-provider px-5 py-4 w-auto whitespace-nowrap ${extraTailwindClasses}`}
      style={{ ...styles }}
      onClick={() => clickHandler()}
    >
      {children}
    </button>
  );
}

export default StandartButton;
