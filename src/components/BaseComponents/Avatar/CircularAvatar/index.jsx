import React from "react";

function CircularAvatar({ tailwindCss = "", src = "", alt = "" }) {
  return (
    <img className={`h-20 w-20 object-cover rounded-full ${tailwindCss}`} src={src} alt={alt} />
  );
}

export default CircularAvatar;
