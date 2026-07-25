import { Link } from "react-router-dom";
import background from "../assets/2.jpeg";
import { FaStar } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
function Home() {

  
  return (
    <>
    
     <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
      >
        
        <div className="fixed top-60 left-10">
          <div className="">
              <span className="bg-green-900/70 text-amber-50 rounded-3xl px-14 py-2 mx-3">ASTRA ORIGINAL</span>
          <span className="bg-black/10 border border-amber-50/30 text-amber-50 rounded-3xl px-10 py-2">NOW STREAMING</span>
          </div>
          <div className="w-[520px] flex gap-4 flex-col">
          <h1 className="text-8xl font-bold text-amber-50/70 [letter-spacing:4px]">Toy Story</h1>

          <span className="text-2xl text-amber-50/70">A cowboy doll's world changes forever when a fearless space ranger arrives.</span>
          
          <span className="text-[18px] text-amber-50/50"><FaStar className="text-yellow-300 inline m-2 "/><span className="text-amber-50">8.3 </span>• <span className="border border-gray-300/50 px-2 rounded-lg">1995</span> • G • 1h 21m • Animation • Adventure • Comedy</span>
            

          <span className="text-xl text-amber-50/70">Woody, a loyal cowboy toy, has always been Andy's favorite. But when Buzz Lightyear joins the toy collection, rivalry quickly turns into an unforgettable adventure. Together, they discover the true meaning of friendship, teamwork, and belonging.</span>
            
            <Link href="/">
            <button className="bg-amber-50 py-2 rounded-4xl text-2xl px-8 ">
              More info
            </button>
            </Link>
          </div>
          
        </div>

<button
  className="absolute right-8 top-1/2
             w-14 h-14 rounded-full
             bg-black/40 text-white
             flex items-center justify-center
             hover:bg-black/70
             transition duration-300 cursor-pointer"
>
  <IoChevronForward size={30} />
</button>
    </div>
    </>

  );
}
export default Home;