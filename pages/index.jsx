import Head from 'next/head';

import { getFeaturedPosts } from '../helpers/posts-util';

import { FeaturedPosts } from '../components/home-page/FeaturedPosts';
import { Hero } from '../components/home-page/Hero';

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Andrei's Blog</title>
        <meta name="description" content="I post about programming and web development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
