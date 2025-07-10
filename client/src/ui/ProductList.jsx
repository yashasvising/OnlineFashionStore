import React, { useContext } from 'react'

import Product from "@/components/Product"
import { CartContext } from "@/App"

export default function ProductList({ products, onAddToCart }) {
	const { cart } = useContext(CartContext)

	console.log(products.length);

	return (
		<div className="flex flex-wrap justify-center">
			{products.map(product => {

				return (
					<Product
						key={product._id}
						imgSrc={product.image}
						price={product.price}
						link={`/products/${product._id}`}
						onAddToCart={() => onAddToCart(product)}
						isInCart={cart.products.some(p => p.id === product._id)}
					/>
				)
			}
			)
			}
		</div>
	)
}