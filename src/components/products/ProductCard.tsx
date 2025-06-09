import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card group h-full flex flex-col">
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full mb-2">
          {product.category}
        </span>
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
        <Link 
          to={`/products/${product.id}`}
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 mt-auto"
        >
          Learn more
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;