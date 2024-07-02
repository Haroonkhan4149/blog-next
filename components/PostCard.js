import Link from 'next/link';
import React from 'react';

export default function PostCard(props) {
  const { post } = props;
  return (
    <Link className='text-indigo-600 hover:text-indigo-900 transition duration-300 ease-in-out unstyled' href={`/recipe/${post.slug}`}>
      <h3 className='text-2xl font-bold mb-2'>{post.title}</h3>
      <p className='text-lg text-gray-600'>{post.bio}</p>
      <div className='statsContainer flex flex-wrap justify-center mb-4'>
        <div className='w-1/2 md:w-1/4 xl:w-1/6 p-4'>
          <h5 className='text-lg font-bold mb-2'>Prep Time</h5>
          <p className='text-lg text-gray-600'>{post.prep_time}</p>
        </div>
        <div className='w-1/2 md:w-1/4 xl:w-1/6 p-4'>
          <h5 className='text-lg font-bold mb-2'>Cook Time</h5>
          <p className='text-lg text-gray-600'>{post.cook_time}</p>
        </div>
      </div>
    </Link>
  );
}