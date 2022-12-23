import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/ProductDetail";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
