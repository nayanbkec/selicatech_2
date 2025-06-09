import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FileText, Download, ArrowLeft, Clock, Check, Pill } from 'lucide-react';
import { allProducts } from '../data/products';
import { Product } from '../types';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  // Find product in data
  useEffect(() => {
    const foundProduct = allProducts.find(p => p.id.toString() === productId);
    setProduct(foundProduct || null);
  }, [productId]);

  if (!product) {
    return (
      <div className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-600">Product not found.</p>
          <Link to="/products" className="mt-4 inline-block text-primary-600 hover:text-primary-700">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Link to="/products" className="text-primary-600 hover:text-primary-700 flex items-center">
            <ArrowLeft size={16} className="mr-1" />
            Back to Products
          </Link>
        </div>

        {/* Product Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-[300px] lg:h-[400px] object-cover"
            />
          </div>
          <div>
            <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm mb-3">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="flex flex-wrap items-center space-x-4 mb-6">
              <div className="flex items-center text-gray-600">
                <Pill size={18} className="mr-2 text-primary-600" />
                <span>{product.dosage}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock size={18} className="mr-2 text-primary-600" />
                <span>{product.releaseDate}</span>
              </div>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Clinically proven efficacy in multiple trials</p>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Manufactured in FDA-approved facilities</p>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Available in multiple formulations</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="btn btn-primary flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  // Handle product inquiry
                  alert('Product Inquiry Form');
                }}
              >
                Request Information
              </a>
              <a 
                href="#" 
                className="btn btn-outline flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  // Handle download
                  alert('Downloading product brochure');
                }}
              >
                <Download size={18} className="mr-2" />
                Download Brochure
              </a>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
          <div className="border-b">
            <nav className="flex">
              {['overview', 'details', 'research', 'faq'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-b-2 border-primary-600 text-primary-700'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Product Overview</h2>
                <p className="mb-4">{product.longDescription || 'Detailed product description is currently being updated.'}</p>
                <p className="mb-4">
                  {product.name} is designed to provide effective treatment for patients suffering from various conditions. With its unique formulation, it offers improved efficacy and safety compared to conventional treatments.
                </p>
                <h3 className="text-lg font-semibold mb-2 mt-6">Key Benefits</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Rapid onset of action</li>
                  <li>Extended duration of effect</li>
                  <li>Minimal side effects</li>
                  <li>Convenient dosing regimen</li>
                  <li>Suitable for a wide range of patients</li>
                </ul>
              </div>
            )}

            {activeTab === 'details' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Technical Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Composition</h3>
                    <p className="mb-4">
                      {product.name} contains active ingredients carefully formulated to maximize therapeutic effect while minimizing potential side effects.
                    </p>
                    <h3 className="text-lg font-semibold mb-3">Indications</h3>
                    <p className="mb-4">
                      This product is indicated for the treatment of specific conditions as prescribed by healthcare professionals. Always consult a physician before use.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Dosage</h3>
                    <p className="mb-4">
                      The recommended dosage is determined by a healthcare professional based on individual patient needs. Standard dosing is typically {product.dosage}.
                    </p>
                    <h3 className="text-lg font-semibold mb-3">Storage</h3>
                    <p className="mb-4">
                      Store at room temperature (15-30°C) in a dry place. Keep away from direct sunlight and out of reach of children.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'research' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Research & Clinical Studies</h2>
                <p className="mb-6">
                  {product.name} has been extensively studied in clinical trials to establish its safety and efficacy profiles.
                </p>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h3 className="font-semibold mb-1">Phase III Clinical Trial Results</h3>
                    <p className="text-gray-700 text-sm mb-2">Published in Journal of Pharmaceutical Research, 2022</p>
                    <p className="text-gray-600">
                      A double-blind, placebo-controlled study involving 500 patients demonstrated significant improvement in primary endpoints with minimal adverse events.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h3 className="font-semibold mb-1">Comparative Efficacy Study</h3>
                    <p className="text-gray-700 text-sm mb-2">International Medical Conference, 2021</p>
                    <p className="text-gray-600">
                      Head-to-head comparison with standard of care treatments showed superior outcomes in terms of both efficacy and patient tolerance.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h3 className="font-semibold mb-1">Long-term Safety Monitoring</h3>
                    <p className="text-gray-700 text-sm mb-2">Ongoing since 2020</p>
                    <p className="text-gray-600">
                      Post-marketing surveillance data continues to support the favorable safety profile established during clinical development.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'faq' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">What is {product.name} used for?</h3>
                    <p className="text-gray-700">
                      {product.name} is primarily used for the treatment of conditions as prescribed by healthcare professionals. It works by targeting specific pathways to provide relief and improve patient outcomes.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">How should this medication be taken?</h3>
                    <p className="text-gray-700">
                      Always take {product.name} exactly as prescribed by your healthcare provider. The typical dosage is {product.dosage}, but individual recommendations may vary.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Are there any side effects?</h3>
                    <p className="text-gray-700">
                      As with all medications, {product.name} may cause side effects in some patients. The most commonly reported effects include mild gastrointestinal discomfort. Consult the package insert for a complete list.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Is this product covered by insurance?</h3>
                    <p className="text-gray-700">
                      Coverage varies by insurance provider. We recommend checking with your insurance company regarding coverage details. Patient assistance programs may be available for eligible individuals.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Documents */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
          <h2 className="text-xl font-semibold mb-4">Related Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Product Brochure', 'Safety Data Sheet', 'Prescribing Information'].map((doc, index) => (
              <a 
                key={index}
                href="#"
                className="flex items-center p-4 border rounded-md hover:bg-gray-50 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  // Handle document download
                  alert(`Downloading ${doc}`);
                }}
              >
                <FileText className="text-primary-600 mr-3" />
                <span className="flex-grow">{doc}</span>
                <Download className="text-gray-400" size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;