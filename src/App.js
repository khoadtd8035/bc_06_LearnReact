import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import ProductList from "./components/ProductList";
import Promotion from "./components/Promotion";

function App() {
  return (
    <div>
      <div>
        <Header />
        <Carousel />
        <ProductList />
        <Promotion />
      </div>
    </div>
  );
}

export default App;
