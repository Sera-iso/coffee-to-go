import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import LogIn from "./components/Log-in";
import SignUp from "./components/Sign-up";
import NoPage from "./pages/NotFound";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

export default function App() {
  return (
    <ShoppingCartProvider>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Navbar />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Footer />
      </div>
    </ShoppingCartProvider>
  );
}
