import React from "react";

const Header = () => {
  return (
    <header className="bg-primary p-5">
      <div className="container">
        <div
          id="breadcrumb"
          className="flex items-center gap-2 text-white font-semibold text-xl"
        >
          <h1 className="pb-1">Task Management</h1>
          <i className="icon-chevron-right w-3 h-3"></i>
          <span className="pb-1">Home</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
