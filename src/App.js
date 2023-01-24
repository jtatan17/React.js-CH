import "./index.css";
import "./components/Item.css";
import NavBar from "./components/NavBar";
import Greeting from "./components/Greeting";
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="mainConatiner">
      <NavBar />
      <Greeting text="Bienvenidos a Footlocker, la mejor tienda de tenis" />
      {/* <ItemListContainer/> */}
      {/* <ItemDetailContainer /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/detalle" element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
