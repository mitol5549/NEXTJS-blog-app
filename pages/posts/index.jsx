import { getAllPosts } from '../../helpers/posts-util';

import { AllPosts } from '../../components/posts/AllPosts';

export default function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
