import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}



const ProductCard = ({id, title, description, price ,thumbnail }: Product) => {
  return (
    <div
           
            className="bg-white border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="relative h-48 w-full bg-gray-200">
              <Image
                src={thumbnail}
                alt={title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 truncate">
                {title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold text-lg">
                  ${price}
                </span>
                <Link
                  href={`/products/${id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
  )
}

export default ProductCard