import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Input, Heading, Img } from "../../components";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import { Header, HeaderMobile } from "pages/Header";
import { Footer } from "pages/Footer";








export default function MirocomPage() {
  return (
    <>
      <Helmet>
        <title>Micro | Home</title>
        <meta name="description" content="Web site created using create-react-app with shakil" />
      </Helmet>



      <div className="flex flex-col items-center justify-start w-full bg-white-A700">




    
<Header/>
  
   
    
      <div className="hidden sm:block">
<HeaderMobile/>
</div>






      </div>
    </>
  );
}
