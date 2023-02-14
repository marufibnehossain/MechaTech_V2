import React from "react";
import { HiChartPie, HiViewBoards, HiInbox, HiShoppingBag } from 'react-icons/hi';

function Sideline() {
  return (
    <aside
      id="logo-sidebar"
      className="fixed left-0 bottom-0 w-20 h-[87%] pt-5 transition-transform -translate-x-full sm:translate-x-0 bg-[#171717]"
      aria-label="Sidebar"
    >
      <div className="flex justify-center h-full px-3 pb-4 overflow-y-auto bg-[#171717]">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
            >
              <HiChartPie className="w-6 h-6 transition duration-75 text-gray-300 group-hover:text-white" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
            >
              <HiViewBoards className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-300 group-hover:text-white" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
            >
              <HiInbox className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-300 group-hover:text-white" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
            >
              <HiShoppingBag className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-300 group-hover:text-white" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sideline;
