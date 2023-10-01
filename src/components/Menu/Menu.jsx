import React from "react";

export default function Menus() {
  return (
    <div className="w-100vw mt-5 fixed top-0 z-[100]">
      <div className="flex w-[100vw] place-content-evenly">
        <div className="flex justify-center w-[30vw]">
          <h1 className="text-white p-4 text-2xl"> softverse.com </h1>
        </div>
        <div className="flex w-[70vw] justify-end">
          <nav className="flex gap-5">
            <a className="p-4 text-white cursor-pointer  text-2xl  hover:text-white">Home </a>
            <a className="p-4 text-white cursor-pointer  text-2xl  hover:text-white">About </a>
            <a className="p-4 text-white cursor-pointer  text-2xl hover:text-white">Contact </a>
            <a className="p-4 text-white cursor-pointer  text-2xl hover:text-white">Projects </a>
            <a className="p-4 text-white cursor-pointer  text-2xl hover:text-white">Podey </a>
            <a className="text-white cursor-pointer  text-2xl hover:text-white bg-black p-4 w-[120px] text-center">Aaaimai </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
