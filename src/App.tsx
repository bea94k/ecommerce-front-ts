import React from 'react';
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import CategoryPage from './components/CategoryPage'
import ProductCard from './components/ProductCard'

import './App.css';

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <h1>Henlo</h1>
      <Categories />
      <CategoryPage />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </>
  )
}

export default App;
