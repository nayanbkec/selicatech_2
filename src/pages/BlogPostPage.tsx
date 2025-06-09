import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BlogPostPage: React.FC = () => {
  const { postId } = useParams();

  return (
    <>
      <Helmet>
        <title>Blog Post - SelicaTech</title>
        <meta name="description" content="Blog post content." />
      </Helmet>

      <div className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto container-padding">
          <h1 className="text-4xl font-bold mb-8">Blog Post: {postId}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Blog post content coming soon...
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;