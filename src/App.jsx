import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./features/auth/components/LoginForm";
import RegisterForm from "./features/auth/components/RegisterForm";

function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/Astra" element={<Home />}>
            <Route path="/Astra/login" element={<LoginForm />} />
            <Route path="/Astra/register" element={<RegisterForm/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
