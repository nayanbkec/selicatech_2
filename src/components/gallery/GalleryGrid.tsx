import React, { useState } from 'react';
import { allProducts } from '../../data/products';
import { productCategories } from '../../data/products';
import { Search, X } from 'lucide-react';

const GalleryGrid: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Filter products based on search and category
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || product.categoryId === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white 
                          placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 
                          focus:border-primary-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white 
                        focus:outline-none focus:ring-2 focus:ring-primary-500 
                        focus:border-primary-500 sm:text-sm"
            >
              <option value="">All Categories</option>
              {productCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 group"
            onClick={() => handleImageClick(product.image)}
          >
            <div className="relative h-48 md:h-56 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-2">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm">{product.category}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 transition-all" onClick={closeModal}>
          <div className="relative max-w-5xl mx-4">
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              <X size={24} />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged product" 
              className="max-h-[80vh] max-w-full object-contain rounded"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;