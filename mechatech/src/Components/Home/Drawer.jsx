import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Drawer({ isOpen, setIsOpen }) {
  return (
    <div className={"fixed overflow-hidden z-10 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen ? " transition-opacity opacity-100 duration-500 translate-x-0  " : " transition-all delay-500 opacity-0 translate-x-full")}>
      
      <section className={"sm:max-w-xs w-full right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")}>
      
        <div className="w-full py-8 flex justify-end"><RxCross2 className="text-[#26A5E2] text-4xl xl:mx-9 md:mx-8 mx-5" onClick={() => {setIsOpen(false);}} /></div>

        <div className="p-0 mt-0">
          <ul className="mx-7 lg:text-3xl sm:text-2xl text-2xl font-semibold text-black sm:text-left text-center font-avbold">
            <li className="list-one my-2"><Link to={"/"} className="hover:text-[#41b1fe]">What we do</Link></li>
            <li className="list-one my-2"><Link to={"/"} className="hover:text-[#41b1fe]">Company</Link></li>
            <li className="list-one my-2"><Link to={"/"} className="hover:text-[#41b1fe]">Contact</Link></li>
          </ul>
          <ul className="mx-9 my-10 sm:my-8 lg:text-lg sm:text-lg text-sm font-normal text-zinc-400 sm:text-left text-center font-avreg">
            <li className="list-two md:my-1.5 my-3"><Link to={"/"} className="hover:text-[#4ba4fc]">Careers</Link></li>
            <li className="list-two md:my-1.5 my-3"><Link to={"/"} className="hover:text-[#4ba4fc]">Linkedin</Link></li>
            <li className="list-two md:my-1.5 my-3"><Link to={"/"} className="hover:text-[#4ba4fc]">Dribble</Link></li>
            <li className="list-two md:my-1.5 my-3"><Link to={"/"} className="hover:text-[#4ba4fc]">Instagram</Link></li>
            <li className="list-two md:my-1.5 my-3"><Link to={"/"} className="hover:text-[#4ba4fc]">Twitter</Link></li>
            <li className="list-two md:my-1.5 my-3"><Link to={"/"} className="hover:text-[#4ba4fc]">Privacy Policy</Link></li>
          </ul>
          <div className="line mx-9 font-bold lg:mt-20 sm:mt-16 text-lg md:text-xl text-center sm:text-left font-avbold">
            <Link to={"/"}>Chattogram</Link>
            <div className="flex sm:justify-start justify-center"><img className="md:w-32 w-28" src="https://revoicer.com/imageswebp/voiceline3.webp" alt="" /></div>
          </div>

        </div>

      </section>
      <section className=" w-screen h-full cursor-pointer " onClick={() => {setIsOpen(false);}}></section>
    </div>
  );
}

export default Drawer;