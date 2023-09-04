// BlogPostList.js
import React from 'react';
import BlogPost from './BlogPost';
import BlogData from '../data.js';

function BlogPostList() {

  return (
    <section className="py-8">
      <div className="container w-full mx-auto flex flex-wrap justify-center items-center">
        {BlogData.map((post, index) => (
          <BlogPost key={index} title={post.title} content={post.content} imageSrc={post.imageSrc} />
        ))}
      </div>
    </section>
  );
}

export default BlogPostList;
