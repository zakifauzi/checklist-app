import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full px-3 py-2.5 bg-white flex justify-between drop-shadow-lg">
      <div className="flex items-center font-bold text-2xl ml-10 text-[#085E7D]">
        <div id="to-homepage" href="/">
          Check List Apps
        </div>
      </div>
    </div>
  );
};

export default Navbar;
