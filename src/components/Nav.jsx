import React from "react";

const Nav = () => {
  return (
    <>
    <div className="h-screen w-[15%] bg-gray-300 p-5 text-center">
      <a
        className="text-center px-4 py-2 text-blue-300 border border-blue-300 rounded hover:text-blue-600"
        href=""
      >
        Add new product
      </a>

      <hr className="mt-10 w-[100%] border-gray-400" />
      <div className="flex flex-col items-start">
        <h3 className="mt-5 text-lg font-semibold">Filter Category</h3>
        <ul>
          <li className="flex px-4 py-2 text-gray-900 items-center justify-center gap-1">
            <span className=" inline-block h-[15px] w-[15px] bg-red-300 rounded-full"></span>
            cat 1
          </li>
          <li className="flex px-4 py-2 text-gray-900 items-center justify-center gap-1">
            <span className=" inline-block h-[15px] w-[15px] bg-green-300 rounded-full"></span>
            cat 2
          </li>
          <li className="flex px-4 py-2 text-gray-900 items-center justify-center gap-1">
            <span className=" inline-block h-[15px] w-[15px] bg-blue-300 rounded-full"></span>
            cat 3
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Nav;
