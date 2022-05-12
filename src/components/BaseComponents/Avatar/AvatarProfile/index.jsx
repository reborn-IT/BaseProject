import React from "react";

function AvatarProfile({ src = "", alt = "", name = "", description = "", tailwindCss = {} }) {
  return (
    <div className={`flex items-center space-x-4 ${tailwindCss.container}`}>
      <img
        className={`w-20 h-20 rounded-full object-cover ${tailwindCss.image}`}
        src={src}
        alt={alt}
      />
      <div className="space-y-1 font-medium">
        <h3 className={`${tailwindCss.name}`}>{name}</h3>
        <p className={`text-sm text-gray-500 ${tailwindCss.description}`}>{description}</p>
      </div>
    </div>
  );
}

export default AvatarProfile;
