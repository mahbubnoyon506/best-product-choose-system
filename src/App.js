
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Products from './Components/Allproducts/Products';
import Bonus from './Components/Bonus/Bonus';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
      <Bonus> </Bonus>
      <Footer></Footer>
    </div>
  );
}

export default App;
