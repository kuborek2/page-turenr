import './App.css';
import { SearchBar } from './components/search-bar';
import { ProductsContainer } from './components/products-container';

function App() {
  return (
    <div class="components-docking-container">
      <SearchBar/>
      <ProductsContainer/>
    </div>
  );
}

export default App;
