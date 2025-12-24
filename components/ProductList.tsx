import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import ProductCard from './ProductCard';


interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList = async({products}: ProductListProps) => {
  return (
    <div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product}/>
        ))}
      </div>
    </div>
  )
}

export default ProductList