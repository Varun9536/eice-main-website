import React, { useState, useRef } from "react";
import laptop from "../assets/Compressed/Laptop.png";
import {
  MdChevronLeft,
  MdChevronRight,
  MdDesignServices,
  MdIntegrationInstructions,
} from "react-icons/md";

import dtransbanner from "../assets/Compressed/dtransbanner.jpg";
import servicebannerpattern from "../assets/Compressed/servicebannerpattern.png";

import { FiCheckCircle } from "react-icons/fi";

import dtdigital from "../assets/Compressed/dtdigital.svg";
import dtdesign from "../assets/Compressed/dtdesign.svg";
import dtconsulting from "../assets/Compressed/dtconsulting.svg";

import Footer from "../Othercomps/Footer.jsx";
import Copyright from "../Othercomps/Copyright.jsx";
import TalkToUs from "../Othercomps/Talktous";
import Reviews from "../Homecomps/Reviews";
import Clients from "../Homecomps/Clients";
import Clientele from "../Homecomps/Clientele";
import Process from "../Homecomps/Process.jsx";
import { BiCode, BiShoppingBag, BiSupport } from "react-icons/bi";
import { PiMonitorDuotone } from "react-icons/pi";
import { CiMonitor } from "react-icons/ci";
import { LuMonitor } from "react-icons/lu";
import { CgDesignmodo } from "react-icons/cg";
import { FaPeopleArrows } from "react-icons/fa";


// cs images

import opo from "../assets/Cs/opo.jpg"
import etp from "../assets/Cs/etp.jpg"

import adai from "../assets/Automobile/adai.jpeg"
import ccp from "../assets/Automobile/ccp.jpg"
import mpo from "../assets/Automobile/mpo.jpg"

import  aipdt from "../assets/medical/aipdt.jpeg"
import  tmp from "../assets/medical/tmp.jpeg"

import web from "../assets/Service_and_technology/web.png"



const industries = [
  { name: "OIL AND GAS INDUSTRY", id: "oil" },
  { name: "AUTOMOBILE INDUSTRY", id: "auto" },
  { name: "HEALTHCARE INDUSTRY", id: "health" },
];

const projects = {
  oil: [
    {
      title: "Offshore Platform Optimization",
      description:
        "Improved production efficiency by 25% through advanced AI-driven monitoring systems.",
        img : opo
        
    },
    {
      title: "Energy Trading Platform",
      description:
        "Built a blockchain-based trading platform, improving transaction security and reducing costs by 20%.",
        img : etp
    },
  ],
  auto: [
    
    {
      title: "Autonomous Driving AI",
      description:
        "Created a machine learning model improving object detection accuracy by 30% in diverse weather conditions.",
        img : adai
    },
    {
      title: "Connected Car Platform",
      description:
        "Designed a cloud-based system enabling OTA updates and predictive maintenance for 100,000+ vehicles.",
    img : ccp
      },
    {
      title: "Manufacturing Process Optimization",
      description:
        "Implemented an AI-driven system reducing production line downtime by 40% and improving quality control.",
        img :mpo
    },
  ],
  health: [
    {
      title: "AI-Powered Diagnostic Tool",
      description:
        "Developed an AI algorithm for early cancer detection, improving accuracy by 15% over traditional methods.",
        img : adai
    },
    {
      title: "Telemedicine Platform",
      description:
        "Created a secure, HIPAA-compliant telehealth solution, facilitating over 1 million virtual consultations.",
        img :tmp
    },
  ],
};


const CaseStudy = ({ title, description, image }) => (
  <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4">
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-32 sm:h-40 md:h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"
      />
      <div className="p-3 md:p-4">
        <h3 className="fontweight_1 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
      </div>
    </div>
  </div>
);

function Cstdmain() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id);

  return (
    <div className="font-manrope px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-bloo text-center text-xl sm:text-2xl lg:text-3xl fontweight_1 mb-2 sm:mb-4 py-1">
        Case Studies
      </h2>
      <h1 className="text-blackk  fontweight_1 text-center text-2xl sm:text-3xl mx-auto md:text-3xl lg:text-[32px] max-w-7xl py-1 pb-8">
        Explore how we digitally transformed other businesses
      </h1>
      <main className="container mx-auto max-w-7xl">
        <nav className="mb-8 sm:mb-12">
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {industries.map((industry) => (
              <li key={industry.id}>
                <button
                  onClick={() => setActiveIndustry(industry.id)}
                  className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition ${
                    activeIndustry === industry.id
                      ? "bg-blue-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {industry.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {industries.map((industry) => (
          <section
            key={industry.id}
            className={`mb-12 px-2 ${
              activeIndustry === industry.id ? "block" : "hidden"
            }`}
          >
            <h2 className="text-xl px-2 sm:text-2xl fontweight_1 mb-4 sm:mb-6">
              {industry.name}
            </h2>
            <div className="flex flex-wrap -mx-2">
              {projects[industry.id].map((project, index) => (
                <CaseStudy
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.img}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

function Webdevelopment() {
  return (
    <div>
      <div className="xl:-mt-8 -mt-4 bg-gradient-to-r from-transparent via-bloo/5 to-bloo/10 pt-16 md:pt-20 lg:pt-12 2xl:pt-0">
        <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen ">
          <div className="absolute -z-20 inset-0 right-[75%]">
            <img src={servicebannerpattern} alt="" />
          </div>
          <div className="flex lg:flex-row flex-col px-4 py-20 items-center">
            <div className="w-full">
              <h1 className="text-blackk  fontweight_1 fontsize_6 ">
                Web App Development
              </h1>
              <h2 className="text-blackk/60 font-semibold max-w-5xl mx-auto sm:text-2xl py-4 text-2xl sm:leading-tight leading-snug text-left">
                {
                  "Cutting-Edge Web App Development Services: Transforming Ideas into High-Impact Digital Solutions"
                }
              </h2>
            </div>
            <div className="lg:flex hidden items-center justify-end ">
              <div className="lg:w-7/12 w-1/2">
                <img src={web} alt="" className="rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-20 lg:py-16 ">
        <div className="relative font-manrope mx-auto px-4 lg:px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h1 className="text-blackk  fontsize_2 fontweight_1">
                Cutting-Edge{" "}
                <span className="text-bloo">Web App Development Services</span>{" "}
                 Transforming Ideas into High Impact Digital Solutions
              </h1>
            </div>
            <div>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg ">
                In an era where digital presence is crucial for business
                success, web applications have become a key component of a
                company's strategy. A well-designed web app can drive user
                engagement, streamline operations, and boost growth.
                <div className="py-2" />
                At EICE Technology we offer comprehensive web app development
                services that combine innovation, technology, and user-centric
                design to deliver exceptional digital solutions. Our team of
                experts is dedicated to creating web applications that not only
                meet but exceed client expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative font-manrope mx-auto sm:max-w-7xl w-screen py-4 lg:pt-24 pt-12 pb-20  ">
        <h1 className="text-bloo fontweight_1 text-center fontsize_2  py-2">
          Our Web App Development Services
        </h1>
        <h2 className="text-blackk  fontweight_1 text-center text-2xl sm:text-3xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
          Our Digital Transformation Expertise
        </h2>
        <div className="grid px-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-8">
          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200 ">
            <div className="rounded-full flex items-start w-full">
              <BiCode size={48} className="text-bloo" />
            </div>
            <div className="pt-2 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl ">
                CUSTOM WEB APP DEVELOPMENT
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg ">
                We build custom web applications tailored to your needs, from
                vision to deployment, covering design, development, and
                integration to create unique, goal-oriented solutions for a
                competitive market.{" "}
              </p>
            </div>
          </div>
          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200 ">
            <div className=" rounded-full  flex items-start w-full">
              <BiShoppingBag size={48} className="text-bloo" />
            </div>
            <div className="pt-2 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
                E-COMMERCE WEB APP DEVELOPMENT
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg ">
                In the competitive e-commerce landscape, we create
                user-friendly, feature-rich online stores with appealing
                storefronts, secure payment gateways, and advanced management
                features for a seamless shopping experience.
              </p>
            </div>
          </div>
          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200 ">
            <div className=" rounded-full  flex items-start w-full">
              <LuMonitor size={48} className="text-bloo" />
            </div>
            <div className="pt-2 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
                PROGRESSIVE WEB APP (PWA) DEVELOPMENT
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg ">
                We develop Progressive Web Apps (PWAs) that blend web and mobile
                features for a fast, reliable, engaging experience, with offline
                capabilities, push notifications, and cross-platform
                compatibility.{" "}
              </p>
            </div>
          </div>
          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200 ">
            <div className=" rounded-full  flex items-start w-full">
              <MdDesignServices size={48} className="text-bloo" />
            </div>
            <div className="pt-2 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
                WEB APP DESIGN AND UX
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg ">
                A great web app begins with exceptional design. Our team creates
                intuitive, visually appealing interfaces that enhance user
                engagement, ensuring easy navigation and a seamless experience
                across devices.
              </p>
            </div>
          </div>
          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200 ">
            <div className=" rounded-full  flex items-start w-full">
              <BiSupport size={48} className="text-bloo" />
            </div>
            <div className="pt-2 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
                MAINTENANCE AND SUPPORT
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg ">
                Post-launch maintenance ensures your web app's success. We offer
                updates, bug fixes, performance optimization, and support to
                keep your app secure, efficient, and current with industry
                trends.
              </p>
            </div>
          </div>
          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200 ">
            <div className=" rounded-full  flex items-start w-full">
              <MdIntegrationInstructions size={48} className="text-bloo" />
            </div>
            <div className="pt-2 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl">
                INTEGRATION AND MIGRATION SERVICES
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg ">
                We integrate web apps with APIs for payment gateways, CRM, and
                social media, while offering expert migration services for
                smooth transitions to new platforms, servers, or the cloud.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Cstdmain />
      <Reviews />
      <TalkToUs />
      <Footer />
      <Copyright />
    </div>
  );
}

export default Webdevelopment;