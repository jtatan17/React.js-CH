
import './App.css';
import MyButton from "./components/Button";
import FlexWrapper from './components/Flexwrapper';
import Item from './components/Item';
import NavBar from './components/NavBar';
import Greeting from './components/Greeting';

function App() {
  return (
    <div>
      <NavBar/>
      <Greeting text="Bienvenidos a Footlocker, la mejor tienda de tenis"/>
      <div>
        <FlexWrapper>
        <Item 
        image="https://http2.mlstatic.com/D_NQ_NP_924043-MCO31047123874_062019-W.jpg" title="Camisa" price={200} detail="La mejor camisa" />
        <Item 
        image="https://contents.mediadecathlon.com/p1786958/k$2b0a8a97ea3b1154f2f3734009451fe2/pantalon-de-montana-y-trekking-viaje-de-hombre-forclaz-travel-100-gris.jpg?&f=800x800" title="Pantalon" price={100} detail="El mejor pantalon"/>
        <Item 
        image="https://media.revistagq.com/photos/5ca5e2183492a93c99bededc/master/w_800,h_1200,c_limit/tipos_de_corbata_y_cuando_ponerse_cada_una_926868016.jpg" title="Corbata" price={50} detail="La mejor corbata"/>
        </FlexWrapper> 
      </div>
    </div>
  );
}



export default App;
