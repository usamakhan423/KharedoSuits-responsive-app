import React from 'react';

function BlogPost({ imageSrc, title, category, content}) {

  return (
    <div className={`bg-white w-1/3 shadow-lg rounded-lg my-2 mx-2 p-2 overflow-hidden`}>
      {/* Card Image */}
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover rounded" />

      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-2">{category}</p>
        <p className="text-gray-600 text-sm mb-2">{content}</p>
        <button className="text-orange-400 text-sm font-semibold rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default BlogPost;

