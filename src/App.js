
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Products from './Components/Allproducts/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
