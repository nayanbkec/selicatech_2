import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Software Development',
      excerpt: 'Explore how artificial intelligence is revolutionizing the way we build and deploy software applications.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      link: '/blog/future-of-ai-in-software-development',
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices for 2024',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud with minimal downtime.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cloud Computing',
      link: '/blog/cloud-migration-best-practices-2024',
    },
    {
      id: 3,
      title: 'Building Scalable Microservices Architecture',
      excerpt: 'Learn the principles and patterns for designing microservices that can scale with your business needs.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Architecture',
      link: '/blog/building-scalable-microservices-architecture',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-white dark:bg-dark-900">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights from our technology experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card card-hover overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <Clock size={14} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <User size={14} className="mr-1" />
                    {post.author}
                  </div>

                  <Link
                    to={post.link}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read more
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/blog" className="btn btn-primary">
            View All Articles
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;