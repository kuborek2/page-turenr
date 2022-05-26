import './App.css';
import { SearchBar } from './components/search-bar';
import { ProductsContainer } from './components/products-container';
import { Pageing } from './components/pageing';

function App() {
  return (
    <div class="components-docking-container">
      <SearchBar/>
      <div class="separator"/>
      <ProductsContainer/>
      <div class="separator"/>
      <Pageing/>
    </div>
  );
}

export default App;
