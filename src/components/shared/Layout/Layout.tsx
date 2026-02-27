import { Outlet } from 'react-router-dom';
import { Header } from '../../Header/Header';
import { Suspense } from 'react';
import { Main } from './Layout.styled';
import { Bounce, ToastContainer } from 'react-toastify';

export const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />

        <Suspense fallback={'Loading'}>
          <Outlet />
        </Suspense>
      </Main>
      <footer></footer>
    </>
  );
};
