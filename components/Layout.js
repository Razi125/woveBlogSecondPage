import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Loop from "./Loop/Loop";
import Containt from "./MainContaint/Containt";
import Card from "./Modern-Workflow/Card";
import WorksContaint from "./WorksContaint/WorksContaint";
import WoveBeforAfter from "./WoveBeforAfter/WoveBeforAfter";

const Layout = () => {
  return (
    <div className='bg-[#000000] min-h-screen'>
      <Header />
      <Containt/>
      <WorksContaint/>
      <Card/>
      {/* <WoveBeforAfter/> */}
      <Loop/>
      <Footer />
    </div>
  );
};

export default Layout;
