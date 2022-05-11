import React from 'react';

function CommonRoundedButton({
  children,
  styles,
  extraTailwindClasses = "",
  clickHandler
}) {
  return (
    <button
      type="button"
      className={`become-provider px-5 py-4 rounded-full w-auto whitespace-nowrap ${extraTailwindClasses}`}
      style={{ ...styles }}
      onClick={() => clickHandler()}
    >
      {children}
    </button>
  );
}

export default CommonRoundedButton;
