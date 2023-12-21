import { Footer, Header } from "@/components/shared";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Header />
      </div>
      <main className="flex-1 ">
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};
