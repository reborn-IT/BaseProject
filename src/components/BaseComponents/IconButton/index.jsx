import React from "react";

function IconButton({ tailwindCss = "", ClickHandler = () => {}, children }) {
  return (
    <button onClick={() => ClickHandler()} className={`flex items-center px-5 py-4 ${tailwindCss}`}>
      {children}
    </button>
  );
}

export default IconButton;
