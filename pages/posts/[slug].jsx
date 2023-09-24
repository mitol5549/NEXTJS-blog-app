import { PostContent } from '../../components/posts/post-detail/PostContent';
import { getPostData, getPostsFiles } from '../../helpers/posts-util';

export default function PostDetailPage(props) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileName = getPostsFiles();

  const slugs = postFileName.map(fileName => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  };
}
