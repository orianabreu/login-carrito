import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carrito from "./components/Carrito/Carrito";
import LoginReducer from "./components/LoginReducer/LoginReducer";
import CartContext from "./context/CartContext";

function App() {
  return (
      <CartContext>

        <Router>

          <Routes>
            <Route path='/' element={<LoginReducer />} />
            <Route path='carrito' element={<Carrito />} />
          </Routes>

        </Router>

      </CartContext>
  );
}

export default App;
