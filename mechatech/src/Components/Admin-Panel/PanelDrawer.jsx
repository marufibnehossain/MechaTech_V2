import React from "react";
// import { RiMenu2Fill } from "react-icons/ri";
// import { RxCross2 } from "react-icons/rx";
import { HiChartPie, HiViewBoards, HiInbox, HiShoppingBag } from 'react-icons/hi';


function PanelDrawer({ isOpen, setIsOpen }) {
  return (
    <div className={"fixed overflow-hidden z-10 inset-0 transform ease-in-out " +
        (isOpen ? " transition-opacity opacity-100 duration-500 -translate-x-0  " : " transition-all delay-500 opacity-0 -translate-x-full")}>
      
      <section className={"sm:max-w-[240px] w-full left-0 bottom-0 absolute h-[87%] shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " -translate-x-0 " : " -translate-x-full ")}>

        {/* <div className="w-full flex justify-end"><RxCross2 className="text-black text-4xl xl:mx-9 md:mx-8 4xs:mx-5" onClick={() => {setIsOpen(false);}} /></div> */}
      

        <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 w-auto h-screen pt-5 transition-transform -translate-x-full sm:translate-x-0 bg-[#171717]"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-[#171717]">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center px-5 py-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
            >
              <HiChartPie className="w-6 h-6 transition duration-75 text-gray-300 group-hover:text-white" />
              <span class="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-5 py-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
            >
              <HiViewBoards className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-300 group-hover:text-white" />
              <span class="ml-3">Add New Products</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-5 py-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
            >
              <HiInbox className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-300 group-hover:text-white" />
              <span class="ml-3">Inbox</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-5 py-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
            >
              <HiShoppingBag className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-300 group-hover:text-white" />
              <span class="ml-3">Cart</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>

      </section>
      <section className=" w-screen h-full cursor-pointer " onClick={() => {setIsOpen(false);}}></section>
    </div>
  );
}

export default PanelDrawer;
