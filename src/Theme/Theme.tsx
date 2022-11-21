import { ReactNode } from "react";
import {
  Outlet,
  RouterProvider,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import { Header } from "./../components/Header/index";

interface ThemeProps {
  children?: ReactNode;
}

export const Theme = ({ children }: ThemeProps) => {
  return (
    <div className="w-screen h-screen overflow-y-auto flex flex-col  items-center  bg-gray-900  text-gray-100">
      <Header />
      <main className="pt-24 pb-8 w-full">
        <Outlet />
      </main>
    </div>
  );
};
