import { ReactNode } from "react";
import {Navbar} from "../components/navbar";
import Footer from "./Footer copy";

interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
