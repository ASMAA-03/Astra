import { HiMenu } from "react-icons/hi";
/*
still work on it
*/
function HamburguerMenu() {
  return (
    <>
      <nav className="h-18 py-7 px-20 flex  items-center bg-black/5 rounded-b-4xl  fixed top-0 left-0 w-full z-50 sm:">
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
    </>
  );
}
export default HamburguerMenu;