import ReactMarkdown from 'react-markdown';

import { PostHeader } from './PostHeader';

import classes from './post-content.module.css';

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs4',
  title: 'Getting started with NextJS',
  image: 'getting-started-nextjs.png',
  date: '2022-02-10',
  content: '# This is a first post',
};

export const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};
