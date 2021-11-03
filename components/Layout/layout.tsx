import { NextPage } from 'next';

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
