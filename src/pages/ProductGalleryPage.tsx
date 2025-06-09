import React from 'react';
import GalleryGrid from '../components/gallery/GalleryGrid';

const ProductGalleryPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Product Gallery</h1>
            <p className="text-lg text-blue-100">
              Explore our comprehensive range of pharmaceutical products through our interactive gallery.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
    </div>
  );
};

export default ProductGalleryPage;