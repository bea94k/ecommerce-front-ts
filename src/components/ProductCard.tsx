import React from 'react'
import { Product } from './product'

const ProductCard = ({productInfo}: ProductCardProps): JSX.Element => {
    return (
        <div className="product-card m1">
            PRODUCT CARD
            <p><strong>Name:</strong> {productInfo.name}</p>
            <p>(picture here)</p>
            <p><strong>Price:</strong> {productInfo.price}€</p>
        </div>
    )
}

type ProductCardProps = {
    productInfo: Product;
    key: number
}

export default ProductCard
