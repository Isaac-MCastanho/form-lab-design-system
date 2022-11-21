import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./../components/Header/index";

export const Theme = () => {
  return (
    <div className="w-screen h-screen overflow-y-auto flex flex-col  items-center  bg-gray-900  text-gray-100">
      <Header />
      <main className="pt-24 pb-8 w-full">
        <Outlet />
      </main>
    </div>
  );
};
