import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="h-full">
      <Navbar />
      <Home/>
      </div>
    </>
  );
}

export default App;