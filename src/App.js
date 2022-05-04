// import { Router } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import { Header } from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div>
        <Routes>
          <Route index element={<Home />}>
            {/* <Home /> */}
          </Route>
          <Route path="/cart" element={<Cart />}>
            {/* <Cart /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
