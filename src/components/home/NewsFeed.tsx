import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import { newsItems } from '../../data/news';

const NewsFeed: React.FC = () => {
  // Get only the 3 most recent news items
  const recentNews = newsItems.slice(0, 3);

  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Latest News</h2>
            <p className="text-gray-600 max-w-2xl">
              Stay updated with the latest developments from our company and the pharmaceutical industry.
            </p>
          </div>
          <Link 
            to="/news" 
            className="mt-4 md:mt-0 inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
          >
            View all news
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentNews.map((item) => (
            <article key={item.id} className="card group h-full flex flex-col">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock size={14} className="mr-1" />
                  <span>{item.date}</span>
                  <span className="mx-2">•</span>
                  <Tag size={14} className="mr-1" />
                  <span>{item.category}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{item.summary}</p>
                <Link 
                  to={`/news/${item.id}`}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 mt-auto"
                >
                  Read more
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;