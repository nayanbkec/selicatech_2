import React, { useState } from 'react';
import { newsItems } from '../data/news';
import { Search, Calendar, Tag, Clock } from 'lucide-react';

const NewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Get unique categories
  const categories = [...new Set(newsItems.map(item => item.category))];

  // Filter news based on search and category
  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">News & Updates</h1>
            <p className="text-lg text-blue-100">
              Stay informed about the latest developments at MediPharm and in the pharmaceutical industry.
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search Input */}
              <div className="md:col-span-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search news..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white 
                              placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 
                              focus:border-primary-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white 
                            focus:outline-none focus:ring-2 focus:ring-primary-500 
                            focus:border-primary-500 sm:text-sm"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Featured News */}
          {!searchTerm && !selectedCategory && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Featured News</h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto bg-gray-200">
                    <img 
                      src={newsItems[0].image} 
                      alt={newsItems[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar size={14} className="mr-1" />
                      <span>{newsItems[0].date}</span>
                      <span className="mx-2">•</span>
                      <Tag size={14} className="mr-1" />
                      <span>{newsItems[0].category}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{newsItems[0].title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{newsItems[0].summary}</p>
                    <a 
                      href="#" 
                      className="inline-block text-primary-600 font-medium hover:text-primary-700"
                      onClick={(e) => {
                        e.preventDefault();
                        // Handle read more
                        alert(`Read more: ${newsItems[0].title}`);
                      }}
                    >
                      Read full article
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* News Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {searchTerm || selectedCategory ? 'Search Results' : 'Latest News'}
            </h2>

            {filteredNews.length === 0 ? (
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-gray-500">No news articles match your search criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.map((item) => (
                  <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
                    <div className="h-48 bg-gray-200 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Clock size={14} className="mr-1" />
                        <span>{item.date}</span>
                        <span className="mx-2">•</span>
                        <Tag size={14} className="mr-1" />
                        <span>{item.category}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{item.summary}</p>
                      <a 
                        href="#" 
                        className="inline-block text-primary-600 font-medium hover:text-primary-700"
                        onClick={(e) => {
                          e.preventDefault();
                          // Handle read more
                          alert(`Read more: ${item.title}`);
                        }}
                      >
                        Read more
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Load More Button */}
          {filteredNews.length > 9 && (
            <div className="text-center mt-10">
              <button 
                className="btn btn-outline"
                onClick={() => {
                  // Handle load more
                  alert('Load more news');
                }}
              >
                Load More News
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;