import React, { useState, useEffect, MouseEvent } from 'react'
import allProducts from '../mock-data/products.json'

const Categories = ({handleActiveCategoryChange}: CategoriesProps): JSX.Element => {
    const [allCategoriesArray, setAllCategoriesArray] = useState<string[]>([])

    useEffect(() => {
        const allCategories = new Set<string>() // since I want to collect categories without repetition
        allCategories.add("all")
    
        allProducts.forEach(product => {
            product.categories.forEach(category => {
                allCategories.add(category)
            })
        })
    
        setAllCategoriesArray(Array.from(allCategories))
    }, [])

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        handleActiveCategoryChange(e.currentTarget.value)
    }


    return (
        <div className="categories-list">
            {allCategoriesArray && allCategoriesArray.map((category, i) => 
                <button key={i} value={category} className="category" onClick={handleClick}>{category}</button>
            )}
        </div>
    )
}

type CategoriesProps = {
    handleActiveCategoryChange: (newActiveCategory: string) => void
}

export default Categories
