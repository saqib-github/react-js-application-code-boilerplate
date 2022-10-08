// public layout for routes

import React from "react";
import "./SideBar/sidebar.css";

import SideBar from "./SideBar";
import HeaderComponent from "./Header/index.js";
import FooterComponent from "./Footer";

const Index = ({ children }) => {
  return (
    <>
      <div className=' d-flex flex-wrap justify-content-center'>
        <aside width={"320px"} className="sidebar">
          <SideBar />
        </aside>
        <div>
          <header>
            <HeaderComponent />
          </header>
          <main>
            <div>{children}</div>
          </main>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Index;
