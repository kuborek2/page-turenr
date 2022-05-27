import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';
import { SearchBar } from './components/search-bar';
import { ProductsContainer } from './components/products-container';
import { Pageing } from './components/pageing';

// const DynamicComponenets = () => {
//   return(
//     <div>
//       <SearchBar/>
//       <div class="separator"/>
//       <ProductsContainer/>
//     </div>
//   )
// }

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={
          <div className='components-docking-container'>
          <SearchBar/>
          <div className='separator'/>
          <ProductsContainer/>
          <div className='separator'/>
          <Pageing/>
        </div>
        }/>
        <Route exact path='/:pageNumber' element={
          <div className='components-docking-container'>
            <SearchBar/>
            <div className='separator'/>
            <ProductsContainer/>
            <div className='separator'/>
            <Pageing/>
          </div>
        }/>
      </Routes>

    </Router>
  );
}

export default App;
