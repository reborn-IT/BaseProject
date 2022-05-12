import React from "react";

function StandardAvatar({ tailwindCss = "", src = "", alt = "" }) {
  return <img className={`rounded h-20 w-20 object-cover ${tailwindCss}`} src={src} alt={alt} />;
}

export default StandardAvatar;
