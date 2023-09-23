import Image from 'next/image';

import classes from './hero.module.css';

export const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/andrei.jpeg" alt="An image showing Andrei" width={200} height={200} />
      </div>
      <h1>Hi I'm Andrei</h1>
      <p>I blog about web development - especially frontend frameworks like React or Next.js</p>
    </section>
  );
};
