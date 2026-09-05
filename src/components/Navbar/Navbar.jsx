import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi"; function Navbar() {
  const links = 
    [
      {
        id: 1,
        name: "Home",
        path: "/",

      },
      {
        id: 2,
        name: "About",
        path: "/about"
      },
      {
        id: 3,
        name: "Contact",
        path:"/contact"
      },
    ];
  
  const [open, setOpen] = useState(false);



  return (
   
    <motion.nav
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="fixed top-0 left-0 w-full z-50 flex items-center justify-between pl-6 py-3 pr-3 md:px-20 md:py-4 rounded-b-4xl md:justify-evenly"
    >
      <div className="inline-flex justify-center items-center gap-10">

        <div className="text-[15px] text-white/80 md:text-2xl [letter-spacing:3px]">AsTrA</div>

       </div>
      <div className="">
        <ul className="hidden md:flex justify-around w-2xl text-[18px] text-white/80 ">
          {links.map((link) => (
            <li key={link.id} className="cursor-pointer hover:text-gray-300 duration-300 ">
              <Link to={link.path}>{link.name}</Link>
                      </li>
          ))}
        </ul>
        <button onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white/80">
          {open ? <HiX />:<HiMenu /> }
        </button>
      </div>

      {open && (
        <div className="absolute top-[53px] right-0 w-full h-54 rounded-b-4xl md:hidden bg-black/5   backdrop-blur-[3px]">
      <ul className="flex flex-col items-center gap-6 py-8 text-white text-xl">
            {links.map((link) => (<li key={link.id}>
            <Link to={link.path}onClick={() =>setOpen(false)}className="hover:text-gray-300 duration-300">
                  {link.name}
                  </Link>
                  </li>
            ))}</ul>
      </div>
      )}</motion.nav>
  );
}
export default Navbar;