import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import LoginForm from "./features/auth/components/LoginForm";
import RegisterForm from "./features/auth/components/RegisterForm";

function App() {
  return (
    <div className="h-full">
      <Navbar />

      <Routes>
        <Route path="/astra" element={<Home />} />
        <Route path="/astra/login" element={<LoginForm />} />
        <Route path="/astra/register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
