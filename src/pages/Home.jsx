import { Link } from "react-router-dom";
import toyStory from "../assets/toyStory.jpeg";
import insideOut from "../assets/insideOut.jpeg";
import elemental from "../assets/elemental.jpeg";
import overTheHedge from "../assets/overTheHedge.webp";
import { FaStar } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
import { useState ,useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../components/Buttons";
function Home() {

  const movieDetail =
    [
      {
        id: 1,
        title: "Toy Story",
        image: toyStory,
        tagline:"A cowboy doll's world changes forever when a fearless space ranger arrives.",
        rating: "8.3",
        year: "1995",
        duration: "1h 21m",
        genres: " Animation • Adventure • Comedy",
        description:
          "Woody, a loyal cowboy toy, has always been Andy's favorite. But when Buzz Lightyear joins the toy collection, rivalry quickly turns into an unforgettable adventure. Together, they discover the true meaning of friendship, teamwork, and belonging.",
        color:"bg-green-700",
      },
      {
        title: "Inside Out",
        image: insideOut,
        tagline:
          "Meet the little voices inside your head that shape every emotion.",
        rating: "8.1",
        year: "2025",
        duration: "1h 35m",
        genres: " Animation • Family • Comedy",
        description:
          "Young Riley's emotions Joy, Sadness, Anger, Fear, and Disgust.work together to guide her through a difficult move to a new city in this heartfelt Pixar adventure.",
        color:"bg-red-700",
      },
      {
        id: 3,
        title: "Elemental",
        image: elemental,
        tagline:
          "In a city where fire, water, earth, and air live together, two opposites discover an unexpected connection.",
        rating: "7.0",
        year: "2023",
        duration: "1h 41m",
        genres: " Animation • Adventure • Comedy • Family",
        description:
          "Ember, a fiery and determined young woman, forms an unlikely friendship with Wade, a kind-hearted man made of water. As they explore Element City together, they challenge their beliefs about each other and discover that their differences can bring them closer.",
        color: "bg-orange-700",
      },
            {
        id: 4,
        title: "Over the Hedge",
        image: overTheHedge,
        tagline:
          "A clever raccoon convinces a group of woodland animals to explore the mysterious world beyond the hedge.",
        rating: "6.7",
        year: "2006",
        duration: "1h 23m",
        genres: " Animation • Adventure • Comedy • Family",
        description:
          "After waking from hibernation, a group of forest animals discover that their home has been replaced by a suburban neighborhood. Led by the witty raccoon RJ and the cautious turtle Verne, they embark on a hilarious adventure filled with friendship, teamwork, and unexpected challenges.",
        color: "bg-orange-700",
}
    ]

  const[currentMovie,setCurrentMovie] = useState(0);
  


useEffect(() => {
  const interval = setInterval(() => {
    setCurrentMovie((prev) => (prev + 1) % movieDetail.length);
  }, 9000); 

  return () => clearInterval(interval);
}, []);


  return (
    <>
    
      <motion.div
        className="relative"
        key={currentMovie}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{duration:0.6}}
      style={{
        backgroundImage: `url(${movieDetail[currentMovie].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
      >
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent">          <div className="absolute top-24 left-4 md:top-37 md:left-10 w-[90%] max-w-[520px] z-10">
            <div className="py-8 md:py-2">
            <span
              className={`${movieDetail[currentMovie].color} px-3 text-[12px] text-amber-50 rounded-3xl md:px-14 py-2 mx-3`}>ASTRA ORIGINAL
            </span>

            <span
                className="px-3 text-[12px] bg-black/10 border border-amber-50/30 text-amber-50 rounded-3xl md:px-10 py-2">NOW STREAMING
            </span>
          </div>
          <div
            className="w-[360px] md:w-[520px] flex gap-4 flex-col ">
            <h1
                className="text-4xl md:text-8xl font-bold text-amber-50/80 [letter-spacing:4px]">{movieDetail[currentMovie].title}
            </h1>

            <span
              className="text-[17px] md:text-xl text-amber-50/70">{movieDetail[currentMovie].tagline }</span>
          
            <span
              className="text-[14px] md:text-[18px] text-amber-50/50"><FaStar className="text-yellow-300 inline m-2 " /><span className="text-amber-50">{movieDetail[currentMovie].rating }</span>• <span className="border border-gray-300/50 px-2 rounded-lg">{movieDetail[currentMovie].year }</span> {movieDetail[currentMovie].duration }{movieDetail[currentMovie].genres }</span>
            

            <span
              className="text-[15px] md:text-lg text-amber-50/70">{movieDetail[currentMovie].description }</span>
            
            <Link href="/">
                <Button 
                  className="bg-amber-50 py-2 rounded-4xl text-xl px-8 "
                  text="More info">
                </Button>
              </Link>
              
          </div>
        </div>

        <button
          onClick={() => setCurrentMovie((currentMovie+1)%movieDetail.length)}
             className="hidden md:absolute md:right-8 md:top-1/2
             w-14 h-14 rounded-full
             bg-black/40 text-white
             md:flex items-center justify-center
             hover:bg-black/70
             transition duration-300 cursor-pointer"
>
  <IoChevronForward size={30} />
          </button>
          </div>
    </motion.div>
    </>

  );
}
export default Home;
