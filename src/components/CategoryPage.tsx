import React, { useState, useEffect } from 'react'
import { Product } from './product'
import ProductCard from './ProductCard'

import allProducts from '../mock-data/products.json'

const CategoryPage = ({activeCategory}: CategoryPageProps): JSX.Element => {
    const [productsToShow, setProductsToShow] = useState<Product[]>(allProducts)
    console.log("re-running...")

    useEffect(() => {
        if (activeCategory === "all") {
            setProductsToShow(allProducts)
        } else {
            let temp: Product[] = []
            allProducts.forEach(product => {
                if (product.categories.includes(activeCategory)) {
                    temp.push(product)
                }})
                setProductsToShow(temp)

                // does the same thing
                // is setting products first to none and then updating with each new one causing too many re-renders?
                /* setProductsToShow([])
                allProducts.forEach(product => {
                    if (product.categories.includes(activeCategory)) {
                        setProductsToShow(currentProducts => [...currentProducts, product])
                    }}) */
        }
    }, [activeCategory])

    return (
        <div>
            <h2 className="m1">Active category: {activeCategory}</h2> 
            <div className="product-cards-wrap">
                {productsToShow.map(product => 
                    <ProductCard key={product.id} productInfo={product}/>
                )}
            </div>
        </div>
    )
}

type CategoryPageProps = {
    activeCategory: string
}

export default CategoryPage
