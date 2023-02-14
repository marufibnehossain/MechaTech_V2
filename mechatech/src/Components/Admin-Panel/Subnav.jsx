import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { BiHome } from "react-icons/bi";
import { AiOutlineRight } from "react-icons/ai";


function Subnav({ setIsOpen }) {
  return (
    <div className="bg-[#171717] flex items-center w-full">
      <button className="text-white lg:text-3xl 4xs:text-2xl bg-[#171717] border border-[#171717] border-r-slate-400/40 px-5 py-3 w-20 flex justify-center"
       type="button" onClick={() => setIsOpen(true)}
      >
        <RiMenu3Fill  />
      </button>
      <div className="flex items-center justify-between w-full">
        <h2 className="capitalize text-white text-2xl font-semibold mx-7">
          Default layout
        </h2>
        <nav
          className="flex px-5 py-3 text-white mx-5"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white"
              >
                <BiHome class="w-4 h-4 mr-2" />
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <AiOutlineRight className="w-6 h-6 text-gray-400" />
                <a
                  href="#"
                  className="ml-1 text-sm font-medium md:ml-2 text-gray-400 hover:text-white"
                >
                  Templates
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <AiOutlineRight className="w-6 h-6 text-gray-400" />
                <span className="ml-1 text-sm font-medium md:ml-2 text-gray-400">
                  Flowbite
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default Subnav;
