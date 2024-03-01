import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import { ToastContainer } from "react-toastify";

export const Layout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="container">
        <Outlet />
      </main>
      <Suspense fallback={null}></Suspense>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};
