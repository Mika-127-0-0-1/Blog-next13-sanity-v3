import React from 'react'
import {previewData} from "next/headers";
import {groq} from "next-sanity";
import { client } from '../../lib/sanity.client';
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from '../../components/PreviewBlogList';
import BlogList from "../../components/BlogList";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export const revalidate = 60;

export default async function Homepage() {
  if(previewData()) {
    return ( <PreviewSuspense fallback={
      <div role="status">
        <p className='text-center text-lg animate-pulse text-[#F7AB0A]'>
          Loading Preview Data...
        </p>
      </div>
    }>
      {/* Preview Blog list */}
      <PreviewBlogList query={query} />
    </PreviewSuspense>)
  };

  const posts = await client.fetch(query);
  {/* Blog list */}
  return <BlogList posts={posts}/>
}
