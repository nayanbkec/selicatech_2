import React, { useState, useEffect } from 'react';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';
import { allProducts } from '../data/products';
import { useSearchParams } from 'react-router-dom';

const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  // Update filtered products when search term or category changes
  useEffect(() => {
    const filtered = allProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === '' || product.categoryId === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory]);

  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory) {
      searchParams.set('category', selectedCategory);
    } else {
      searchParams.delete('category');
    }
    setSearchParams(searchParams);
  }, [selectedCategory, searchParams, setSearchParams]);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-lg text-blue-100">
              Discover our innovative pharmaceutical solutions designed to improve patient outcomes and quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <ProductFilter 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {/* Results */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No products match your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;