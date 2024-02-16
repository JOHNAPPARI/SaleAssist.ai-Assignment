//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Header/Navbar';
import ProductsList from './components/ProductsHeader/ProductsList';
import MyComponent from './components/ProductsItems/ProductsDetails';
import ProductsDetails from './components/ProductsItems/ProductsDetails';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <ProductsList />
        <ProductsDetails />
        <MyComponent />
      </div>
    </div>
  );
}

export default App;
