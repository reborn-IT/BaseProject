import React from "react";

function DotIndicatedAvatar({ tailwindCss = {}, src = "", alt = "" }) {
  return (
    <div className={`relative ${tailwindCss.container}`}>
      <img
        className={`w-20 h-20 rounded-full object-cover ${tailwindCss.image}`}
        src={src}
        alt={alt}
      />
      <span
        className={`top-0 right-1 absolute w-5 h-5 bg-green-400 border-2 border-white rounded-full ${tailwindCss.dot}`}
      ></span>
    </div>
  );
}

export default DotIndicatedAvatar;
