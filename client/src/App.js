
import { Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
function App() {
  return (
    <>
    <Navbar/>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
    </>
  );
}

export default App;
