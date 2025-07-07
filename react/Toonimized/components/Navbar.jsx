import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navbar() {
  return (
    <div className="bg-gray-800/15 py-5 px-5 flex justify-between items-center fixed top-0 w-[100vw] z-50">
      <div className="Left">
        <img
          src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600086643/Logo_hafewu.png"
          alt="Logo"
          className="w-[200px]"
        />
      </div>
      <div className="Middle">
        <ul className="flex gap-x-5">
          <li>Home</li>
          <li>Gallery</li>
          <li>Artist</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="Right flex gap-x-10 items-center">
        <FontAwesomeIcon icon={faCartShopping} size="2xl" />
        <button className="bg-amber-400 hover:bg-amber-500 p-2 text-sm rounded-xl">
          GET STARTED
        </button>
      </div>
    </div>
  );
}

export default Navbar;
