import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import ProductDetailsUI from "./components/products/ProductDetailsUI";
import Home from "./dashboard/Home";

const App = () => {
  
  return (
      <div>
        <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />

        <Route
          path="/product/:id"
          element={
            <Container>
              <ProductDetailsUI />
            </Container>
          }
        />
      </Routes>
      </div>
  );
};

export default App;
