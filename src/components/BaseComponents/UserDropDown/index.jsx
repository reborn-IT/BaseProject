import React from "react";

function UserDropDown({ src = "", alt = "", name = "", email = "", links = [], lastButton = "" }) {
  return (
    <>
      <img
        id="avatar"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        className="w-10 h-10 rounded-full cursor-pointer"
        src={src}
        alt={alt}
      />
      <div
        id="userDropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>{name}</div>
          <div className="font-medium truncate">{email}</div>
        </div>
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformationButton"
        >
          {links.map((props) => (
            <li key={props.id}>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
          ))}
        </ul>
        <div className="py-1">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            {lastButton}
          </a>
        </div>
      </div>
    </>
  );
}

export default UserDropDown;
