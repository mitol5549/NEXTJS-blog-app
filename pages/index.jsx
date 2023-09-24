import { getFeaturedPosts } from '../helpers/posts-util';

import { FeaturedPosts } from '../components/home-page/FeaturedPosts';
import { Hero } from '../components/home-page/Hero';

export default function HomePage(props) {
  return (
    <>
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
