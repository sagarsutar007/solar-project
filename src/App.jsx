import About from "./pages/About"
import Contact from "./pages/Contact";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router";
import Products from "./pages/Products";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
