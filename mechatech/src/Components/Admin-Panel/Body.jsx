import React from "react";
import { BiHome } from "react-icons/bi";
import { AiOutlineRight } from "react-icons/ai";
import AddProduct from "./AddProduct";

function Body() {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="w-10/12 mx-auto py-5">
      <div className="flex px-5">
        <h3 className="text-2xl font-bold">Products</h3>
        <ol className="inline-flex items-center mx-10 space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-800 hover:text-blue-700"
            >
              <BiHome class="w-4 h-4 mr-2" />
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <AiOutlineRight className="w-6 h-6 text-gray-800" />
              <a
                href="#"
                className="ml-1 text-sm font-medium md:ml-2 text-gray-800 hover:text-blue-700"
              >
                Templates
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <AiOutlineRight className="w-6 h-6 text-gray-800" />
              <span className="ml-1 text-sm font-medium md:ml-2 text-gray-800">
                Flowbite
              </span>
            </div>
          </li>
        </ol>
      </div>
      <div>
        <div className="text-left px-5 my-5">
          <button
            className="text-white capitalize bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
            type="button"
            onClick={() => setIsOpen(true)}
          >
            + add product
          </button>
        </div>

        <main className={" fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
            (isOpen
              ? " transition-opacity opacity-100 duration-500 translate-x-0  "
              : " transition-all delay-500 opacity-0 translate-x-full  ")}>

          <section className={"w-screen max-w-6xl right-0 absolute bg-[#F5F5F8] h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
              (isOpen ? " translate-x-0 " : " translate-x-full ")}>
                <AddProduct />
          </section>
          <section className=" w-screen h-full cursor-pointer " onClick={() => {setIsOpen(false);}}></section>
        </main>
      </div>
    </div>
  );
}

export default Body;
