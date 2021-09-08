import React, { useState, useEffect } from 'react'
import allProducts from '../mock-data/products.json'

const Categories = (): JSX.Element => {
    const [allCategoriesArray, setAllCategoriesArray] = useState<string[]>([])

    useEffect(() => {
        const allCategories = new Set<string>() // since I want to collect categories without repetition
    
        allProducts.forEach(product => {
            product.categories.forEach(category => {
                allCategories.add(category)
            })
        })
    
        // for (let category of allCategories) console.log("iterating through Set", category)
        setAllCategoriesArray(Array.from(allCategories))
    }, [])


    return (
        <div className="categories-list">
            {allCategoriesArray && allCategoriesArray.map((category, i) => 
                <p key={i} className="category">{category}</p>
            )}
        </div>
    )
}

export default Categories
