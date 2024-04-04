import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
