import React from 'react'
import ProductCard from './ProductCard'

import allProducts from '../mock-data/products.json'

const CategoryPage = (): JSX.Element => {
    return (
        <div>
            CATEGORY PAGE 
            {allProducts.map(product => (
                <ProductCard key={product.id} productInfo={product}/>
            ))}
        </div>
    )
}

export default CategoryPage
