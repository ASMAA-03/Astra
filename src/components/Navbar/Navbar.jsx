import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
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
  return (
    <nav className="h-18 py-7 px-20 flex  items-center bg-black/5 rounded-b-4xl  fixed top-0 left-0 w-full z-50">
      <div className="inline-flex justify-center items-center gap-10">
        <div 
          style={
            {
            backgroundImage:`url(${logo})`,
              backgroundRepeat: "no-repeat",
              height: "90px",
              width: "60px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              
            }        
        }
        ></div>
        <div className="text-black/80 text-2xl [letter-spacing:3px]">AsTrA</div>
      </div>
      <div>
        <ul className="flex justify-around w-2xl text-[18px] text-black/85 ">
          {links.map((link) => (
            <li key={link.id} className="cursor-pointer hover:text-gray-300 duration-300 ">
              <Link to={link.path}>{link.name}</Link>
                      </li>
          ))}
        </ul>
      </div>
      <div></div>
    </nav>
  );
}
export default Navbar;