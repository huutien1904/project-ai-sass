import Logo from "@/components/Logo";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import React from "react";

export default function DashboardLayout(props: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <Topbar />
      </header>
      <main className="lg:bg-gray-950 lg:overflow-hidden lg:pl-80 [&:has([is-navbar-minimal])]:lg:pl-20 lg:pr-7 lg:py-7">
        <Sidebar />
      </main>
      {/* {props.children} */}
    </div>
  );
}
