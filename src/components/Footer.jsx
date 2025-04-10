import React from "react";

function Footer() {
  return (
    <div className="w-full bg-gray-300 mt-7 text-center p-2">
      &copy;Copyright {new Date().getFullYear()} | Developed by Hasnain Khan
    </div>
  );
}

export default Footer;
