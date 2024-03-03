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




        <div className="flex flex-col items-center justify-start w-full mt-[60px] ">
          <div className="flex flex-col items-center justify-start w-full gap-[76px]">
          <div className="flex flex-row justify-between items-center w-full max-w-[1140px] sm:hidden">
             {/* Left Section: Text Content */}
           <div className="flex flex-col items-start justify-start w-[39%] pb-6">
              {/* Main Heading */}
               <Heading as="h1" className="w-[86%]  tracking-[-1.00px]">
                   Take ideas from better to best
               </Heading>

               {/* Subheading */}
          <Text as="p" className="w-[98%] mt-4 !text-gray-900_b7">
             Miro is your team&#39;s visual platform to connect, collaborate, and create — together.
          </Text>

          {/* Email Input and Sign Up Button */}
          <div className="flex flex-col items-center justify-start mt-8 gap-2.5">
        <Input type="email" name="email" placeholder="Enter your work email" className="w-full font-inter" />
         <Button size="2xl" className="w-full border-indigo-A400 border border-solid !rounded-[25px]">
          Sign up free →
       </Button>
     </div>

    {/* Additional Text */}
    <Text size="md" as="p" className="mt-[9px] !text-gray-900_66">
      Collaborate with your team within minutes
    </Text>

    {/* Review Section */}
    <div className="flex flex-row justify-center w-4/5 mt-[41px] p-3.5 bg-gray-100 rounded-lg">
      {/* Review Text and Image */}
      <div className="flex flex-col items-start justify-start w-[43%] gap-0.5">
        <Img src="images/img_div.svg" alt="div_one" className="h-[15px]" />
        <Text size="xs" as="p">
          Based on 5149+ reviews:
        </Text>
      </div>

      {/* Gray Image */}
      <Img src="images/img_div_gray_900.svg" alt="div_three" className="h-8" />
    </div>
  </div>

   {/* Right Section: Image */}
   <Img
    src="images/img_headerimage_without_text_png.png"
    alt="headerimage_one"
    className="w-[57%] object-cover"
   />
    </div>



{/* mobile device  */}
    <div className="hidden sm:block">
<div className="flex flex-col  justify-between items-center w-full max-w-[1140px]">
  {/* Left Section: Text Content */}
  <div className="flex flex-col items-start justify-start w-full  pb-6">
    {/* Main Heading */}
    <Heading as="h1" className="w-full  tracking-[-1.00px]">
      Take ideas from better to best
    </Heading>

    {/* Subheading */}
    <Text as="p" className="w-full  mt-4 !text-gray-900_b7">
      Miro is your team&#39;s visual platform to connect, collaborate, and create — together.
    </Text>

    {/* Email Input and Sign Up Button */}
    <div className="flex flex-col items-center justify-start mt-8 gap-2.5">
      <Input type="email" name="email" placeholder="Enter your work email" className="w-full font-inter" />
      <Button size="2xl" className="w-full border-indigo-A400 border border-solid !rounded-[25px]">
        Sign up free →
      </Button>
    </div>

    {/* Additional Text */}
    <Text size="md" as="p" className="mt-[9px] !text-gray-900_66">
      Collaborate with your team within minutes
    </Text>

    {/* Review Section */}
    <div className="flex flex-col  justify-center w-full sm:w-4/5 mt-[41px] p-3.5 bg-gray-100 rounded-lg">
      {/* Review Text and Image */}
      <div className="flex flex-col items-start justify-start  gap-0.5">
        <Img src="images/img_div.svg" alt="div_one" className="h-[15px]" />
        <Text size="xs" as="p">
          Based on 5149+ reviews:
        </Text>
      </div>

      {/* Gray Image */}
      <Img src="images/img_div_gray_900.svg" alt="div_three" className="h-8 sm:ml-4" />
    </div>
  </div>

  {/* Right Section: Image */}
  <Img
    src="images/img_headerimage_without_text_png.png"
    alt="headerimage_one"
    className="w-full  object-cover"
  />
</div>

</div>






    <div className="flex flex-row justify-center w-full">
  <div className="flex flex-col items-center justify-start w-full">
    {/* Section 1: Trusted by 45M+ users */}
    <div className="flex flex-col items-center justify-center w-full gap-[46px] px-14 py-[60px] z-[1] bg-white-A700 sm:hidden">
      <Text as="p" className="mt-[3px] !text-gray-900_99 !font-inter text-center">
        Trusted by 45M+ users
      </Text>
      <Img
        src="images/img_div_gray_900_92x1120.svg"
        alt="div_five"
        className="h-[92px] w-full max-w-[1120px]"
      />
    </div>


<div className="hidden sm:block">
<div className="flex flex-col items-center justify-center w-full gap-[46px] px-4 smpx-14 py-[60px] z-[1] bg-white-A700">
  <Text as="p" className="mt-[3px] !text-gray-900_99 !font-inter text-center">
    Trusted by 45M+ users
  </Text>
  <Img
    src="images/img_div_gray_900_92x1120.svg"
    alt="div_five"
    className="h-[102px] w-full max-w-full sm:max-w-[1120px]"
  />
</div>

</div>

    {/* Section 2: Collaborate without constraints */}
    <div className="flex flex-col  items-center justify-start w-full mt-[-131px] max-w-[1140px]">
      <div className="h-[351px]  w-[46%] relative sm:hidden">
        <Img
          src="images/img_div_amber_400.svg"
          alt="div_seven"
          className="h-[323px] w-[323px] right-0 top-0 m-auto absolute"
        />
        <Heading as="h2" className="w[88%]  bottom-0 left-0 m-auto tracking-[-1.00px] text-start absolute">
          Collaborate without
          <br />
          constraints
        </Heading>
      </div>




{/* mobile device */}
<div className="hidden sm:block">
<div className="h-[351px] w-full sm:w-[46%] relative">
  <Img
    src="images/img_div_amber_400.svg"
    alt="div_seven"
    className="h-[523px] w-[323px] right-0 top-0 m-auto absolute"
  />
  <Heading as="h2" className=" -ml-[160px]  bottom-0 left-0 m-auto tracking[-1.00px] text-start absolute">
    Collaborate without constraints
    
    
  </Heading>
</div>

</div>


      {/* Subsection 1: Free forever */}
      <div className="flex flex-row justify-between items-start w-full mt-3 px-2.5 sm:hidden">
        <div className="flex flex-col items-start justify-start w-[28%] mt-[21px] ml-[23px] gap-7">
          <Heading size="xl" as="h3" className="tracking-[-0.50px]">
            Free forever
          </Heading>
          <Text as="p" className="!text-gray-900_99">
            {/* Add line breaks for readability */}
            Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates.
            Signing up with your work email lets you bring in your team faster. See our <br />
            <span className="text-indigo-A400">pricing plans</span>
            <span className="text-gray-900_99">for more features.</span>
          </Text>
        </div>

        {/* Subsection 2: Easy integrations and Security first */}
        <div className="flex flex-row justify-between items-start w-[64%]">
          {/* Easy integrations */}
          <div className="flex flex-col items-start justify-start w-[43%] mt-6 gap-[25px]">
            <Heading size="xl" as="h4" className="tracking-[-0.50px]">
              Easy integrations
            </Heading>
            <Text as="p" className="!text-gray-900_99">
              {/* Add line breaks for readability */}
              Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and
              Jira, so your workflow is seamless. View the full list in our{" "}
              <span className="text-indigo-A400">Marketplace</span>
              <span className="text-gray-900_99">.</span>
            </Text>
          </div>

          {/* Security first */}
          <div className="flex flex-col items-start justify-start w-[51%] gap-[25px] p-6">
            <Heading size="xl" as="h5" className="tracking-[-0.50px]">
              Security first
            </Heading>
            <Text as="p" className="mb-5 !text-gray-900_99">
              {/* Add line breaks for readability */}
              We treat your data like you would — with the utmost care. We follow industry-leading
              security standards and give you tools to protect intellectual property. Learn more <br />
              at our{" "}
              <span className="text-indigo-A400">Trust Center</span>
              <span className="text-gray-900_99">.</span>
            </Text>
          </div>
        </div>
      </div>




{/* mobile device  */}
<div className="hidden sm:block">
<div className="flex flex-col lg:flex-row justify-between items-start w-full mt-3 px-2.5 ">
  {/* Subsection 1: Free forever */}
  <div className="flex flex-col items-start justify-start w-full lg:w-[28%] mt-6 lg:mt-0 lg:mr-8">
    <Heading size="xl" as="h3" className="tracking-[-0.50px]">
      Free forever
    </Heading>
    <Text as="p" className="!text-gray-900_99 mt-3 lg:mt-4">
      {/* Add line breaks for readability */}
      Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates.
      Signing up with your work email lets you bring in your team faster. See our{" "}
      <br className="lg:hidden" />
      <span className="text-indigo-A400">pricing plans</span>
      <span className="text-gray-900_99 lg:hidden"> for more features.</span>
    </Text>
  </div>

  {/* Subsection 2: Easy integrations and Security first */}
  <div className="flex flex-col items-start justify-start w-full lg:w-[64%] mt-6 lg:mt-0">
    {/* Easy integrations */}
    <div className="flex flex-col items-start justify-start w-full lg:w-[43%] mt-6 lg:mt-0 lg:mr-8 lg:ml-4">
      <Heading size="xl" as="h4" className="tracking-[-0.50px]">
        Easy integrations
      </Heading>
      <Text as="p" className="!text-gray-900_99 mt-3 lg:mt-4">
        {/* Add line breaks for readability */}
        Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira,
        so your workflow is seamless. View the full list in our{" "}
        <span className="text-indigo-A400">Marketplace</span>
        <span className="text-gray-900_99 lg:hidden">.</span>
      </Text>
    </div>

    {/* Security first */}
    <div className="flex flex-col items-start justify-start w-full lg:w-[51%] mt-6 lg:mt-0 lg:ml-4">
      <Heading size="xl" as="h5" className="tracking-[-0.50px]">
        Security first
      </Heading>
      <Text as="p" className="mb-5 !text-gray-900_99 mt-3 lg:mt-4">
        {/* Add line breaks for readability */}
        We treat your data like you would — with the utmost care. We follow industry-leading
        security standards and give you tools to protect intellectual property. Learn more{" "}
        <br className="lg:hidden" />
        at our{" "}
        <span className="text-indigo-A400">Trust Center</span>
        <span className="text-gray-900_99 lg:hidden">.</span>
      </Text>
    </div>
  </div>
</div>
</div>




      {/* Sign up button */}
      <Button size="lg" className="mt-10 border-indigo-A400 border border-solid min-w-[178px]">
        Sign up free →
      </Button>
    </div>
  </div>
</div>





            <Tabs
              className="flex flex-col items-center justify-start w-4/5"
              selectedTabClassName="!text-gray-900 font-normal text-sm border-gray-100_02 border bg-gray-100_01 rounded-[24px]"
              selectedTabPanelClassName="mt-[26px] relative tab-panel--selected"
            >
              <div className="flex flex-row justify-start items-center w-full gap-5 px-2.5 sm:hidden">
                <div className="flex flex-col items-start justify-start w-1/2">
                  <Heading as="h6" className="w-4/5 tracking-[-1.00px]">
                    Work together, wherever you work
                  </Heading>
                  <Text as="p" className="w-[83%] mt-4 !text-gray-900_99 !font-inter">
                    In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and
                    co-create in one space no matter where you are.
                  </Text>
                  <div className="flex flex-row justify-start items-center w-[24%] mt-10 gap-[5px]">
                    <Text
                      as="p"
                      className="pr-[7px] py-px !text-indigo-A400 !font-inter border-indigo-A400 border-b border-solid"
                    >
                      Learn more
                    </Text>
                    <div className="flex flex-col items-center justify-start w-[15%]">
                      <Text as="p" className="!text-indigo-A400 !font-inter">
                        →
                      </Text>
                    </div>
                  </div>
                </div>
                <Img src="images/img_hybridwork_png.png" alt="hybridworkpng" className="w-1/2 object-cover" />
              </div>





<div className="hidden sm:block "> 
<div className="flex flex-col lg:flex-row justify-start items-center w-full gap-5 px-2.5">
  {/* Text Content */}
  <div className="flex flex-col items-start justify-start w-full lg:w-1/2 lg:pr-8">
    <Heading as="h6" className="w-full lg:w-4/5 tracking-[-1.00px]">
      Work together, wherever you work
    </Heading>
    <Text as="p" className="w-full lg:w-[83%] mt-4 !text-gray-900_99 !font-inter">
      In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and
      co-create in one space no matter where you are.
    </Text>
    <div className="flex flex-row justify-start items-center w-full lg:w-[24%] mt-10 gap-[5px]">
      <Text
        as="p"
        className="pr-[7px] py-px !text-indigo-A400 !font-inter border-indigo-A400 border-b lg:border-none lg:pr-0"
      >
        Learn more
      </Text>
      <div className="flex flex-col items-center justify-start w-[15%]">
        <Text as="p" className="!text-indigo-A400 !font-inter">
          →
        </Text>
      </div>
    </div>
  </div>

  {/* Image */}
  <Img src="images/img_hybridwork_png.png" alt="hybridworkpng" className="w-full lg:w-1/2 object-cover mt-6 lg:mt-0" />
</div>

</div>





              <div className="flex flex-row justify-between items-center w-full mt-[119px] pl-2.5 sm:hidden">
                <Img src="images/img_m3_integrations.png" alt="m3integrations" className="w-[49%] object-cover" />
                <div className="flex flex-col items-start justify-start w-[42%]">
                  <Heading as="h1" className="w-3/4 tracking-[-1.00px]">
                    Connect <br />
                    your tools, <br />
                    close your tabs
                  </Heading>
                  <Text as="p" className="w-[99%] mt-7 !text-gray-900_99 !font-inter">
                    Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has
                    100+ integrations with tools you already use and love.
                  </Text>
                  <div className="flex flex-row justify-start items-center w-[28%] mt-[52px] gap-[5px]">
                    <Text
                      as="p"
                      className="pr-[7px] py-px !text-indigo-A400 !font-inter border-indigo-A400 border-b border-solid"
                    >
                      Learn more
                    </Text>
                    <div className="flex flex-col items-center justify-start w-[15%]">
                      <Text as="p" className="!text-indigo-A400 !font-inter">
                        →
                      </Text>
                    </div>
                  </div>
                </div>
              </div>



<div className="hidden sm:block">
<div className="flex flex-col  justify-between items-center w-full mt-[119px] pl-2.5">
  <Img src="images/img_m3_integrations.png" alt="m3integrations" className="w-full  object-cover mb-12" />
  <div className="flex flex-col items-start justify-start w-full ">
    <Heading as="h1" className=" tracking-[-1.00px]">
      Connect <br />
      your tools, <br />
      close your tabs
    </Heading>
    <Text as="p" className="w-full  mt-7 !text-gray-900_99 !font-inter">
      Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has
      100+ integrations with tools you already use and love.
    </Text>
    <div className="flex flex-row justify-start items-center w-full  mt-[52px] gap-[5px]">
      <Text
        as="p"
        className="pr-[7px] py-px !text-indigo-A400 !font-inter border-indigo-A400 border-b border-solid"
      >
        Learn more
      </Text>
      <div className="flex flex-col items-center justify-start w-full ">
        <Text as="p" className="!text-indigo-A400 !font-inter">
          →
        </Text>
      </div>
    </div>
  </div>
</div>

</div>




              <div className="flex flex-row justify-end items-center h-[500px] w-full mt-[59px] p-10 bg-[url(/public/images/img_section.png)] bg-cover bg-no-repeat max-w-[1018px] sm:hidden">
                <div className="flex flex-col items-center justify-start w-[44%] pt-[7px] gap-[11px] px-[7px] my-[151px]">
                  <Heading size="md" as="h5" className="tracking-[-0.50px] text-center">
                    The Ways We Work
                  </Heading>
                  <Text as="p" className="text-center">
                    How has our relationship with work changed?
                  </Text>
                  <Button size="md" className="border-indigo-A400 border border-solid min-w-[164px] rounded-[20px]">
                    View the report →
                  </Button>
                </div>
              </div>



<div className="hidden sm:block">
<div className="flex flex-col sm:flex-row justify-end items-center -[500px] w-full mt-[59px] p-10 bg-[url(/public/images/img_section.png)] bg-cover bg-no-repeat max-w[1018px]">
  <div className="flex flex-col items-center sm:justify-start w-full sm:w[44%] sm:pt-[7px] gap-[11px] px-[7px] my-[151px]">
    <Heading size="md" as="h5" className="tracking-[-0.50px] text-center">
      The Ways We Work
    </Heading>
    <Text as="p" className="text-center">
      How has our relationship with work changed?
    </Text>
    <Button size="md" className="border-indigo-A400 border border-solid minw-[164px] rounded-[20px]">
      View the report →
    </Button>
  </div>
</div>

</div>



              <Heading as="h1" className="mt-[91px] tracking-[-1.00px]">
                Built for the way you work
              </Heading>




              <div className="flex flex-row justify-start w-full mt-[27px] gap-[7px] max-w-[1060px] sm:hidden">
                <Text
                  size="md"
                  as="p"
                  className="flex justify-center items-center w-[137px] h-12 pl-[18px] pr-8 py-[15px] border-gray-100_02 border border-solid bg-gray-100_01 rounded-[24px]"
                >
                  Brainstorming
                </Text>
                <Text
                  size="md"
                  as="p"
                  className="pl-[18px] pr-[29px] py-[15px] border-gray-100_02 border border-solid rounded-[24px]"
                >
                  Diagramming
                </Text>
                <Input
                  color="gray_100_02"
                  size="md"
                  name="a_three"
                  placeholder="Meetings & Workshops"
                  className="w-[19%]"
                />
                <Button color="gray_100_02" variant="outline" className="min-w-[133px]">
                  Scrum Events
                </Button>
                <Button color="gray_100_02" variant="outline" className="min-w-[97px]">
                  Mapping
                </Button>
                <Text
                  size="md"
                  as="p"
                  className="pl-[18px] pr-[30px] py-[15px] border-gray-100_02 border border-solid rounded-[24px]"
                >
                  Research & Design
                </Text>
                <Button color="gray_100_02" variant="outline" className="min-w-[145px]">
                  Strategic Planning
                </Button>
              </div>



<div className="hidden sm:block">
<div className="flex flex-col  justify-start w-full mt-[27px] gap-[7px] max-w-[1060px]">
  <Text
    size="md"
    as="p"
    className="flex justify-center items-center  h-12 pl-[18px] pr-8 py-[15px] border-gray-100_02 border border-solid bg-gray-100_01 rounded-[24px]"
  >
    Brainstorming
  </Text>
  <Text
    size="md"
    as="p"
    className="pl-[58px]   border-gray-100_02 border border-solid rounded-[24px]"
  >
    Diagramming
  </Text>
  <Input
    color="gray_100_02"
    size="md"
    name="a_three"
    placeholder="Meetings & Workshops"
    className="w-full smw-[19%] my-5"
  />
  <Button color="gray_100_02" variant="outline" className="">
    Scrum Events
  </Button>
  <Button color="gray_100_02" variant="outline" className="">
    Mapping
  </Button>
  <Text
    size="md"
    as="p"
    className="pl-[48px] pr[30px] py-[15px] border-gray-100_02 border border-solid rounded-[24px]"
  >
    Research & Design
  </Text>
  <Button color="gray_100_02" variant="outline" className="">
    Strategic Planning
  </Button>
</div>

</div>



              <div className="flex flex-row justify-start items-start w-full mt-[26px] pl-4 gap-[41px] max-w-[1060px] sm:hidden">
                <div className="flex flex-row justify-start w-[29%] mt-[33px]">
                  <div className="flex flex-col items-start justify-start w-full gap-[30px]">
                    <Text as="p">Brainstorming</Text>
                    <Text as="p" className="!text-gray-900_b2">
                      Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos,
                      drawing capabilities — the list goes on.
                    </Text>
                    <Text as="p" className="ml-[3px] !text-indigo-A400">
                      Learn more →
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-[68%]">
                  <Img
                    src="images/img_brainstormwithoutshadow_jpg.png"
                    alt="brainstormwitho"
                    className="w-full object-cover"
                  />
                </div>
              </div>



<div className="hidden sm:block">
<div className="flex flex-col  justify-start items-start w-full mt-[26px] pl-4 gap-[4] ">
  <div className="flex flex-row justify-start w-full  mt-[33px]">
    <div className="flex flex-col items-start justify-start w-full gap-[4] sm:gap-[30px]">
      <Text as="p">Brainstorming</Text>
      <Text as="p" className="!text-gray-900_b2">
        Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.
      </Text>
      <Text as="p" className="ml-[3px] !text-indigo-A400">
        Learn more →
      </Text>
    </div>
  </div>
  <div className="flex flex-col justify-start w-full ">
    <Img
      src="images/img_brainstormwithoutshadow_jpg.png"
      alt="brainstormwitho"
      className="w-full object-cover"
    />
  </div>
</div>

</div>



              <Heading as="h1" className="mt-[177px] tracking-[-1.00px]">
                Built for all kinds of teams
              </Heading>


              <TabList className="flex flex-row justify-between items-center w-[81%] mt-[31px] gap-14 p-3.5 sm:hidden">
                <Tab className="flex flex-row justify-between w-auto ml-[3px]">
                  <Text size="md" as="p">
                    UX & Design
                  </Text>
                  <Text size="md" as="p">
                    Marketing
                  </Text>
                  <Text size="md" as="p">
                    Product Management
                  </Text>
                </Tab>
                <Tab className="flex flex-row justify-between w-auto gap-[54px]">
                  <Text size="md" as="p" className="mt-px">
                    Engineering
                  </Text>
                  <Text size="md" as="p">
                    Consultants
                  </Text>
                </Tab>
                <Tab className="flex flex-row justify-between w-auto mr-1.5 gap-[53px]">
                  <Text size="md" as="p" className="mt-px">
                    Agile Coaches
                  </Text>
                  <Text size="md" as="p">
                    Sales
                  </Text>
                </Tab>
              </TabList>



              {[...Array(3)].map((_, index) => (
                <TabPanel key={`tab-panel${index}`} className="justify-center w-[93%] absolute  sm:hidden">
                  <div className="flex flex-row justify-center w-[93%] mt-[26px]">

                    <div className="flex flex-row justify-center w-full">
                      <div className="flex flex-col items-start justify-start w-[34%] p-3">
                        <div className="flex flex-row justify-start items-center mt-[17px] gap-3.5">
                          <Img src="images/img_frame.svg" alt="image" className="h-[25px] w-6" />
                          <Text as="p" className="!text-gray-900_99">
                            Build low-fi wireframes
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start items-start mt-[15px] gap-3.5">
                          <Img src="images/img_frame.svg" alt="image_one" className="h-[25px] w-6" />
                          <Text as="p" className="w-[83%] !text-gray-900_99">
                            Involve stakeholders in the design process
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start items-start mt-[15px] gap-3.5">
                          <Img src="images/img_frame.svg" alt="image_two" className="h-[25px] w-6" />
                          <Text as="p" className="w-[65%] !text-gray-900_99">
                            Run engaging design workshops
                          </Text>
                        </div>
                        <Text as="p" className="mt-[34px] ml-[7px] !text-indigo-A400">
                          Learn more →
                        </Text>
                        <div className="flex flex-col items-start justify-start mt-[70px] mb-[113px] ml-1 pt-0.5 gap-[13px]">
                          <Text as="p" className="!text-gray-900_99 tracking-[-0.25px]">
                            Integrate your favorite tools
                          </Text>
                          <Img src="images/img_div_gray_900_02.png" alt="div_nine" className="w-[94%] object-cover" />
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-[67%]">
                        <Img
                          src="images/img_uxdesignwithoutshadow_jpg.png"
                          alt="uxdesignwithout"
                          className="w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </TabPanel>
              ))}




<div className="hidden sm:block"> 
<TabList className="flex flex-col  justify-between items-center w-full  mt-[31px] gap-4 sm:gap-14 p-3.5">
  <Tab className="flex flex-row justify-between w-full sm:w-auto ml-[3px]">
    <Text size="md" as="p">
      UX & Design
    </Text>
    <Text size="md" as="p" className="px-12">
      Marketing
    </Text>
    <Text size="md" as="p">
      Product Management
    </Text>
  </Tab>
  <Tab className="flex flex-row justify-between w-full sm:w-auto gap-4 sm:gap-[54px]">
    <Text size="md" as="p" className="mt-px">
      Engineering
    </Text>
    <Text size="md" as="p">
      Consultants
    </Text>
  </Tab>
  <Tab className="flex flex-row justify-between w-full sm:w-auto mr-1.5 gap-4 sm:gap-[53px]">
    <Text size="md" as="p" className="mt-px">
      Agile Coaches
    </Text>
    <Text size="md" as="p">
      Sales
    </Text>
  </Tab>
</TabList>

</div>









{[...Array(3)].map((_, index) => (
  <TabPanel key={`tab-panel${index}`} className="justify-center w-full  absolute hidden sm:block">
    <div className="flex flex-col justify-center w-full  mt-[26px]">

      <div className="flex flex-col justify-center w-full">
        <div className="flex flex-col items-start justify-start w-full s:w-[34%] p-3">
          <div className="flex flex-row justify-start items-center mt-[17px] gap-3.5">
            <Img src="images/img_frame.svg" alt="image" className="h-[25px] w-6" />
            <Text as="p" className="!text-gray-900_99">
              Build low-fi wireframes
            </Text>
          </div>
          <div className="flex flex-col justify-start items-start mt-[15px] gap-3.5">
            <Img src="images/img_frame.svg" alt="image_one" className="h-[25px] w-6" />
            <Text as="p" className="w-full sm:w-[83%] !text-gray-900_99">
              Involve stakeholders in the design process
            </Text>
          </div>
          <div className="flex flex-row justify-start items-start mt-[15px] gap-3.5">
            <Img src="images/img_frame.svg" alt="image_two" className="h-[25px] w-6" />
            <Text as="p" className="w-full sm:w-[65%] !text-gray-900_99">
              Run engaging design workshops
            </Text>
          </div>
          <Text as="p" className="mt-[34px] ml-[7px] !text-indigo-A400">
            Learn more →
          </Text>
          <div className="flex flex-col items-start justify-start mt-[70px] mb-[113px] ml-1 pt-0.5 gap-[13px]">
            <Text as="p" className="!text-gray-900_99 tracking-[-0.25px]">
              Integrate your favorite tools
            </Text>
            <Img src="images/img_div_gray_900_02.png" alt="div_nine" className="w-full sm:w-[94%] object-cover" />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full ">
          <Img
            src="images/img_uxdesignwithoutshadow_jpg.png"
            alt="uxdesignwithout"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  </TabPanel>
))}




              <div className="flex flex-col items-center justify-start w-full mt-[152px] gap-[18px] max-w-[724px]">
                <Heading as="h1" className="tracking-[-1.00px] text-center">
                  Loved by the world&#39;s best teams
                </Heading>
                <Button color="white_A700" size="lg" className="border-indigo-A400 border border-solid min-w-[282px]">
                  See all customer stories →
                </Button>
              </div>





              <div className="flex flex-row w-full mt-10 gap-5 px-2.5 sm:hidden">



                <div className="flex flex-col items-center justify-center w-[33%] p-8 shadow-xs rounded-lg">
                  <Img
                    src="images/img_div_gray_900_61x287.svg"
                    alt="image"
                    className="h-[61px] w-full mt-[3px] max-w-[287px]"
                  />
                  <Text as="p" className="w-[99%] mt-[34px] !text-gray-900_99">
                    “When the pandemic hit, those of us who thrive on in-person collaboration were worried that our
                    creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration,
                    whiteboarding, and retrospectives while remote.”
                  </Text>


                  <div className="flex flex-row justify-start items-center w-full mt-[51px] mb-[3px] gap-4 max-w-[287px]">
                    <Img
                      src="images/img_mask_group_1_png.png"
                      alt="roxanne_mustafa"
                      className="h-12 w-12 rounded-[50%]"
                    />
                    <div className="flex flex-col items-start justify-start w-[73%] gap-1">
                      <Text size="md" as="p" className="!text-gray-900_99">
                        Roxanne Mustafa
                      </Text>
                      <Text size="md" as="p" className="mb-[7px] !text-gray-900_99">
                        Design Team Lead at VMware
                      </Text>
                    </div>
                  </div>
                </div>



                <div className="flex flex-col items-center justify-start w-[33%] p-9 shadow-xs rounded-lg">
                  <Img src="images/img_div_61x287.svg" alt="div_one" className="h-[61px] w-full max-w-[287px]" />
                  <Text as="p" className="w-[98%] mt-[18px] !text-gray-900_99">
                    “Miro helps solve one of the major gaps in product design: how to manage tasks across product
                    designers whose projects are in different tools.”
                  </Text>
                  <div className="flex flex-row justify-start items-center w-full mt-[138px] gap-4 max-w-[287px]">
                    <Img src="images/img_jane_docusign_t.png" alt="janedocusignt" className="h-12 w-12 rounded-[50%]" />
                    <div className="flex flex-col items-start justify-start w-[70%] gap-0.5 py-0.5">
                      <Text size="md" as="p" className="!text-gray-900_99">
                        Jane Ashley
                      </Text>
                      <Text size="md" as="p" className="mb-1.5 !text-gray-900_99">
                        Head of Design at DocuSign
                      </Text>
                    </div>
                  </div>
                </div>



                <div className="flex flex-col items-center justify-start w-[33%] p-9 shadow-xs rounded-lg">
                  <Img src="images/img_div_1.svg" alt="div_one" className="h-[61px] w-full max-w-[287px]" />
                  <Text as="p" className="w-[99%] mt-[34px] !text-gray-900_99">
                    “As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at
                    the core of what we do and will continue to extend into the future.”
                  </Text>
                  <div className="flex flex-row justify-start items-start w-full mt-[111px] gap-[15px] max-w-[287px]">
                    <Img
                      src="images/img_div_48x45.png"
                      alt="div_three"
                      className="w-[16%] mt-px object-cover rounded-[22px]"
                    />
                    <div className="flex flex-col items-start justify-start w-[79%] gap-3.5">
                      <Text size="md" as="p" className="!text-gray-900_99">
                        Laura Baird
                      </Text>
                      <Text size="md" as="p" className="mb-[9px] !text-gray-900_99">
                        Associate Design Director at frog
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs>
          </div>
        </div>






   <div className="hidden sm:block">
   <div className="flex flex-col w-full mt-10 gap-5 px-2.5 ">

<div className="flex flex-col items-center justify-center w-full sm:w[33%] p-8 shadow-xs rounded-lg">
<Img
src="images/img_div_gray_900_61x287.svg"
alt="image"
className="h-[61px] w-full mt-[3px] max-w-[287px]"
/>
<Text as="p" className="w-[99%] mt-[34px] !text-gray-900_99">
“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our
creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration,
whiteboarding, and retrospectives while remote.”
</Text>
<div className="flex flex-row justify-start items-center w-full mt-[51px] mb-[3px] gap-4 max-w-[287px]">
<Img
src="images/img_mask_group_1_png.png"
alt="roxanne_mustafa"
className="h-12 w-12 rounded-[50%]"
/>
<div className="flex flex-col items-start justify-start w-[73%] gap-1">
<Text size="md" as="p" className="!text-gray-900_99">
Roxanne Mustafa
</Text>
<Text size="md" as="p" className="mb-[7px] !text-gray-900_99">
Design Team Lead at VMware
</Text>
</div>
</div>
</div>






<div className="flex flex-col items-center justify-start w-full  p-9 shadow-xs rounded-lg">
  <Img src="images/img_div_61x287.svg" alt="div_one" className="h-[61px] w-full max-w-[287px]" />
  <Text as="p" className="w-[98%] mt-[18px] !text-gray-900_99">
    “Miro helps solve one of the major gaps in product design: how to manage tasks across product
    designers whose projects are in different tools.”
  </Text>
  <div className="flex flex-row justify-start items-center w-full mt-[55px] gap-4 max-w-[287px]">
    <Img src="images/img_jane_docusign_t.png" alt="janedocusignt" className="h-12 w-12 rounded-[50%]" />
    <div className="flex flex-col items-start justify-start w-full sm:w-[70%] gap-0.5 py-0.5">
      <Text size="md" as="p" className="!text-gray-900_99">
        Jane Ashley
      </Text>
      <Text size="md" as="p" className="mb-1.5 !text-gray-900_99">
        Head of Design at DocuSign
      </Text>
    </div>
  </div>
</div>



<div className="flex flex-col items-center justify-start w-full  p-9 shadow-xs rounded-lg">
  <Img src="images/img_div_1.svg" alt="div_one" className="h-[61px] w-full max-w-[287px]" />
  <Text as="p" className="w-[99%] mt-[34px] !text-gray-900_99">
    “As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at
    the core of what we do and will continue to extend into the future.”
  </Text>
  <div className="flex flex-row justify-start items-start w-full mt-[77px] gap-[15px] max-w-[287px]">
    <Img
      src="images/img_div_48x45.png"
      alt="div_three"
      className="w-[16%] mt-px object-cover rounded-[22px]"
    />
    <div className="flex flex-col items-start justify-start w-full sm:w-[79%] gap-3.5">
      <Text size="md" as="p" className="!text-gray-900_99">
        Laura Baird
      </Text>
      <Text size="md" as="p" className="mb-[9px] !text-gray-900_99">
        Associate Design Director at frog
      </Text>
    </div>
  </div>
</div>



</div>

   </div>






{/* This is footer section ============== */}

<div className="hidden sm:block">
      <footer className="flex justify-center items-center w-full mt-[101px] px-4 sm:px-6 lg:px-8 py-[95px] bg-gray-900_01 ">
      {/* Container for Footer Content */}
      <div className="flex flex-col justify-center w-full mb-3 mx-auto max-w-[1056px]">
    
        {/* Main Footer Section */}
        <div className="flex flex-col items-center justify-center w-full gap-10 sm:gap-20">
    
          {/* First Row: Main Information */}
          <div className="flex flex-col flex-wrap justify-between items-start w-full">
    
            {/* Left Column: Company Information and Social Links */}
            <div className="flex flex-col items-start justify-start w-full  gap-6">
    
              {/* Company Information */}
              <div className="flex flex-col items-start justify-start w-full ">
                <Heading size="lg" as="h5" className="!text-white-A700">
                  Scan. Detect. Remove.
                </Heading>
    
                {/* Social Links */}
                <div className="flex flex-row justify-start w-full mt-[50px] pb-9 gap-[39px]">
                  {/* Twitter Icon */}
                  <div className="flex flex-col items-center justify-start h-9 w-9">
                    <Img src="images/img_icon_awesome_twitter_square.svg" alt="iconawesome_one" className="h-9 w-9" />
                  </div>
    
                  {/* Facebook Icon */}
                  <div className="flex flex-col items-center justify-start h-9 w-9">
                    <Img src="images/img_icon_awesome_facebook_square.svg" alt="iconawesome" className="h-9 w-9" />
                  </div>
    
                  {/* Custom Button with Icon */}
                  <Button color="white_A700" size="sm" shape="square" className="w-9">
                    <Img src="images/img_exclusion_8.svg" />
                  </Button>
                </div>
    
                {/* Additional Links */}
                <div className="flex flex-row justify-start w-full sm:w[97%] mt-3 gap-[25px] py-1.5">
                  {/* Privacy Policy Link */}
                  <div className="flex flex-row justify-start  mb-[5px]">
                    <a href="#">
                      <Text size="xs" as="p" className="!text-white-A700 !font-inter underline">
                        Privacy Policy
                      </Text>
                    </a>
                  </div>
    
                  {/* Terms of Service Link */}
                  <div className="flex flex-row justify-start ">
                    <a href="#">
                      <Text size="xs" as="p" className="!text-white-A700 !font-inter underline">
                        Terms of Service
                      </Text>
                    </a>
                  </div>
                </div>
    
                {/* Copyright Text */}
                <Text size="xs" as="p" className="w-full mt-9 !text-white-A700 !font-inter !leading-[15px]">
                  Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356
                </Text>
    
                {/* Designed & Developed By */}
                <Text size="xs" as="p" className="mt-5 !text-white-A700 !font-inter">
                  <span className="text-white-A700">Designed & developed by </span>
                  <a href="#" className="text-white-A700 underline">
                    Bigger Picture
                  </a>
                </Text>
              </div>
    
              {/* Right Column: Miro Information */}
              <div className="flex flex-col items-start justify-start w-full  gap-[60px]">
                <Heading size="2xl" as="h2" className="pt-px pb-[26px] pr-[35px] !text-white-A700 border-white-A700 border-b border-solid">
                  Miro.
                </Heading>
    
                {/* Miro Links */}
                <div className="flex flex-col items-start justify-start w-full gap-[25px]">
                  {/* Miro Categories */}
                  <div className="flex flex-row justify-start items-center gap-6">
                    <Img src="images/img_span.svg" alt="span_three" className="h-5 w-5" />
                    <Heading size="s" as="h6" className="!text-orange-300 tracking-[-0.40px]">
                      iPhone
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-6">
                    <Img src="images/img_span.svg" alt="span_five" className="h-5 w-5" />
                    <Heading size="s" as="h6" className="!text-orange-300 tracking-[-0.40px]">
                      Android
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-6">
                    <Img src="images/img_span.svg" alt="span_seven" className="h-5 w-5" />
                    <Heading size="s" as="h6" className="!text-orange-300 tracking-[-0.40px]">
                      Help
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-6">
                    <Img src="images/img_span.svg" alt="span_nine" className="h-5 w-5" />
                    <Heading size="s" as="h6" className="!text-orange-300 tracking-[-0.40px]">
                      About
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-6">
                    <Img src="images/img_span.svg" alt="span_eleven" className="h-5 w-5" />
                    <Heading size="xs" as="h6" className="mt-0.5 !text-orange-300 tracking-[-0.40px]">
                      Insights
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Newsletter Subscription Section */}
            <div className="h[232px] w-[full]  bg-orange-300 relative rounded-[42px]">
              {/* Rest of the code remains unchanged */}
            </div>
          </div>
    
          {/* Additional Text */}
          <Text size="s" as="p" className="w-full !text-white-A700 !font-inter">
            Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.
          </Text>
        </div>
      </div>
    </footer>
  </div>





        <Footer/>



      </div>
    </>
  );
}
