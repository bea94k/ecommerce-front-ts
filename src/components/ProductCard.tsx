import React from 'react'

const ProductCard = ({productInfo}: ProductInfoProps): JSX.Element => {
    console.log(productInfo.name, productInfo.categories)
    return (
        <div className="product-card">
            PRODUCT CARD
            <p><strong>Name:</strong> {productInfo.name}</p>
            <p>(picture here)</p>
            <p><strong>Price:</strong> {productInfo.price}€</p>
        </div>
    )
}

type ProductInfoProps = {
    productInfo: {
        id: number,
        name: string,
        price: number,
        categories: string[]
    },
    key: number
}

export default ProductCard
