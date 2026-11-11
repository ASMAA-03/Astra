import Logo from "../../../components/Logo/Logo";
import { Link } from "react-router-dom";
export default function LoginForm(){

  return (
    <>
      <section
      className="bg-[oklch(0.45_0.11_9)] flex items-center justify-center min-h-screen sm:px-8 sm:py-12 lg:max-h-screen">
       
      <form className="w-full max-w-175" >
          
          <fieldset
            className="border border-[oklch(1_0_0/35%)] min-h-125 w-full rounded-2xl flex flex-col p-5 sm:p-8 lg:p-12 gap-4 sm:gap-5">
            <legend
            className="text-[oklch(0.985_0.005_20)] flex gap-4 text-3xl" 
            >
              <Logo />Login
            </legend>
            
          <div className="flex flex-col gap-1 mb-5">
            <span className="text-xs tracking-widest font-semibold text-[oklch(0.70_0.21_9)]">
              WELCOME BACK
            </span>
            <span className="text-2xl text-[oklch(0.985_0.005_20)]">
              Ready for the next scene?
            </span>
            <span className="text-[oklch(0.85_0.03_15)]">
              Sign in to continue to your private screening room.
            </span>
          </div>

            
               <label
              className="text-[oklch(0.92_0.02_15)]">Email address :
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="border-2 border-[oklch(1_0_0/40%)] bg-[oklch(0.38_0.1_9/60%)] text-[oklch(0.985_0.005_20)] placeholder:text-[oklch(0.75_0.04_12)] rounded-2xl p-3 outline-none"
            >
            </input>
               <br/>
           
             <label
              className="text-[oklch(0.92_0.02_15)] ">Password :
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border-2 border-[oklch(1_0_0/40%)] bg-[oklch(0.38_0.1_9/60%)] text-[oklch(0.985_0.005_20)] placeholder:text-[oklch(0.75_0.04_12)] rounded-2xl p-3 outline-none">
            </input>
            

            <button
              type="submit"
              className="p-3 bg-[oklch(0.985_0.005_20)] text-[oklch(0.45_0.11_9)] hover:bg-[oklch(0.70_0.21_9)] hover:text-[oklch(0.985_0.005_20)] hover:cursor-pointer transition-colors rounded-2xl"
              >
              Enter Reelroom
            </button>
                     
            <hr className="border-[oklch(1_0_0/20%)]" />

            <p
              className="text-sm text-center text-[oklch(0.85_0.03_15)]">
              New to ReelRoom?{" "}
              <span
                className="cursor-pointer text-[oklch(0.80_0.11_9)] hover:underline">
                <Link to="/registerform">Create an account</Link>
              </span>
            </p>
           
            <div
            className="flex items-center justify-evenly"
            >
                <div
                className="border-1 rounded-2xl border-amber-50 flex flex-col text-[oklch(0.85_0.03_15)] text-sm hover:border-[oklch(0.70_0.21_9)] hover:cursor-pointer p-5  leading-6"
                >
                  <span>MEMBER</span>
                  <span>user@astra.com</span>
                 </div>
                <div
                    className="border-1 rounded-2xl text-sm border-amber-50 flex flex-col text-[oklch(0.85_0.03_15)] hover:border-[oklch(0.70_0.21_9)] hover:cursor-pointer p-5 leading-6"
                    >
                      <span>ADMIN</span>
                      <span>admin@astra.com</span>
                    </div>
            </div>
          </fieldset>
          
          </form>
        
    </section>
    </>
  )
}