import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import CategoryPage from './components/CategoryPage'

import './App.css';

const App = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const handleActiveCategoryChange = (newActiveCategory: string) => {
    setActiveCategory(newActiveCategory)
  }

  return (
    <>
      <Navbar />
      <div className="page-layout">
        <Categories handleActiveCategoryChange={handleActiveCategoryChange} />
        <CategoryPage activeCategory={activeCategory} />
      </div>
    </>
  )
}

export default App;
