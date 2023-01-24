
import './index.css';
import './components/Item.css';
import NavBar from './components/NavBar';
import Greeting from './components/Greeting';
import ItemListContainer from './components/itemListContainer';

function App() {
  return (
    <div className='mainConatiner'>
      <NavBar/>
      <Greeting text="Bienvenidos a Footlocker, la mejor tienda de tenis"/>
      <ItemListContainer/>
    </div>
  );
}



export default App;
