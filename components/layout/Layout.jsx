import { MainNavigation } from './MainNavigation';

export const Layout = props => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};
