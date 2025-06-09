import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { productCategories, featuredProducts } from '../../data/products';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of innovative pharmaceutical products designed to improve patient outcomes and quality of life.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {productCategories.slice(0, 6).map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="bg-white p-4 rounded-lg shadow-sm text-center transition-all hover:shadow-md hover:scale-105"
            >
              <div className="text-primary-600 mx-auto mb-2">
                {category.icon}
              </div>
              <h3 className="font-medium text-sm">{category.name}</h3>
            </Link>
          ))}
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="card group">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full mb-2">
                  {product.category}
                </span>
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <Link 
                  to={`/products/${product.id}`}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                >
                  Learn more
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/products" 
            className="btn btn-outline"
          >
            View All Products
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;