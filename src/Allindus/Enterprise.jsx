import React, { useState, useRef } from "react";
import Footer from "../Othercomps/Footer";
import Copyright from "../Othercomps/Copyright";
import TalkToUs from "../Othercomps/Talktous";
import Reviews from "../Homecomps/Reviews";
import Clients from "../Homecomps/Clients";
import Clientele from "../Homecomps/Clientele";

import { FaCloud, FaDatabase } from "react-icons/fa";

import Enterprise_img from "../assets/industry-images/Enterprise.png";

import random1 from "../assets/Compressed/random1.jpg";
import random2 from "../assets/Compressed/random2.jpg";
import random3 from "../assets/Compressed/random3.jpg";
import random4 from "../assets/Compressed/random4.jpg";
import random5 from "../assets/Compressed/random5.jpg";
import random6 from "../assets/Compressed/random6.jpg";

import laptop from "../assets/Compressed/Laptop.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TiTime } from "react-icons/ti";
import { GoWorkflow } from "react-icons/go";
import { SiInternetcomputer } from "react-icons/si";
import { GiCircuitry } from "react-icons/gi";
import { PiDrone } from "react-icons/pi";

// images
import crms from "../assets/Enterprise/crms.jpg"
import erps from "../assets/Enterprise/erps.jpg"
import hrms from "../assets/Enterprise/hrms.jpg"
import paao from "../assets/Enterprise/paao.jpg"
import rtr from "../assets/Enterprise/rtr.png"


// cs images

import opo from "../assets/Cs/opo.jpg"
import etp from "../assets/Cs/etp.jpg"

import adai from "../assets/Automobile/adai.jpeg"
import ccp from "../assets/Automobile/ccp.jpg"
import mpo from "../assets/Automobile/mpo.jpg"

import  aipdt from "../assets/medical/aipdt.jpeg"
import  tmp from "../assets/medical/tmp.jpeg"



const KeyService = ({ title, description, image }) => (
  <div className="flex-shrink-0 w-80 md:w-96 p-4 pb-16">
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition duration-300 filter grayscale hover:grayscale-0"
      />
      <div className="p-4">
        <h3 className="fontweight_1 text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

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
    <div className="font-manrope px-4 sm:px-6 lg:px-8">
      <h2 className="text-bloo fontweight_1 text-center fontsize_2  py-2">
        Case Studies
      </h2>
      <h1 className="text-blackk  fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1 pb-8">
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
                  } `}
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
            className={`mb-12 px-2p ${
              activeIndustry === industry.id ? "block" : "hidden"
            }`}
          >
            <h2 className="text-xl  px-2 sm:text-2xl fontweight_1 mb-4 sm:mb-6">
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

const services = [
  {
    id: "ehr",
    name: "Enterprise Resource Planning (ERP) Systems",
    image: erps,
    description:
      "Developing robust ERP systems for end-to-end visibility, inventory management, and business planning, empowering enterprises to optimize their operations effectively.",
  },

  {
    id: "telemedicine",
    name: "Customer Relationship Management (CRM) Solutions",
    image: crms,
    description:
      "Creating solutions for managing customer relationships, optimizing sales processes, and ensuring efficient service delivery to enhance customer satisfaction..",
  },

  {
    id: "analytics",
    name: "Human Resources Management Systems (HRMS)",
    image: hrms,
    description:
      "Implementing HRMS platforms for efficient HR operations, including employee tracking, payroll management, and real-time monitoring of HR activities.",
  },

  {
    id: "integration",
    name: "Predictive Analytics and Optimization",
    image: paao,
    description:
      "Providing advanced analytics tools for predictive modeling, demand forecasting, and process optimization, enabling data-driven decision-making to streamline enterprise processes.",
  },

  {
    id: "mobility",
    name: "Real-Time Tracking and Reporting",
    image: rtr,
    description:
      "Developing platforms for real-time tracking of business activities, coupled with comprehensive reporting capabilities for operational insights and performance evaluation..",
  },
];

function Legal() {
  const [activeService, setActiveService] = useState(services[0].id);
  const sliderRefs = useRef({});

  return (
    <div className="">
      <div className="sm:max-w-7xl w-screen mx-auto pb-8">
        <div className="sm:max-w-7xl 2xl:pt-12 pt-32 xl:pb-12 pb-4 px-4 w-screen mx-auto grid">
          <img
            src={Enterprise_img}
            alt=""
            className="object-cover w-full px-2"
          />
          {/* <img src={healthrect2} alt="" />
          <img src={healthrect3} alt="" /> */}
        </div>
        <div className="max-w-7xl mx-auto text-center px-8 flex flex-col gap-2">
          <h1 className="text-blackk fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl pb-4">
            Transforming <span className="text-bloo">Enterprise</span> with
            Innovative Technology
          </h1>
          <p className="font-medium text-blackk/60 sm:text-xl text-lg text-justify">
            At EICE Technology, we excel in transforming enterprise operations
            through state-of-the-art technology solutions. Our mission is to
            provide innovative software that significantly boosts operational
            efficiency, streamlines business processes, and supports
            professionals in delivering exceptional services. We serve a wide
            range of sectors within the enterprise industry, ensuring compliance
            with regulatory standards and enhancing transparency across
            operations. Our solutions are designed to address the unique
            challenges of the enterprise sector, driving improvements in
            productivity, accuracy, and overall performance. Through our
            expertise, we enable professionals to achieve their goals and exceed
            client expectations.
          </p>
        </div>

        <div className="sm:max-w-3xl w-screen mx-auto text-center xl:pt-16 pt-8 xl:pb-6 pb-4">
          <h1 className="text-bloo fontweight_1 text-center fontsize_2  py-2">
            Key Services
          </h1>
          <h1 className="text-blackk  fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl pb-4">
            Explore What We Offer
          </h1>
        </div>
        <div className="sm:max-w-7xl w-screen mx-auto px-4 pb-12">
          <div className="grid lg:grid-cols-3 grid-cols-3 lg:gap-12 gap-6 items-center justify-center">
            <div className="flex flex-col gap-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={` block w-full text-left px-4 py-4 border border-gray-600/60 rounded-lg ${
                    activeService === service.id
                      ? "bg-blue-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  } fontPhone_1`}
                >
                  {service.name}
                </button>
              ))}
            </div>
            <div className="relative h-full rounded-xl w-full col-span-2">
              {services.map(
                (service) =>
                  service.id === activeService && (
                    <div
                      key={service.id}
                      className="p-4 w-full h-full rounded-xl"
                    >
                      <img
                        src={service.image}
                        alt={service.name}
                        className="absolute inset-0 -z-10 w-full h-full object-cover mb-4 rounded-xl"
                      />
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/90 rounded-xl to-black/30  -z-10"></div>
                      <div className="flex flex-col items-center justify-center h-full z-20 px-8 text-white">
                        <h2 className="text-2xl fontweight_1 mb-2">
                          {service.name}
                        </h2>
                        <p className="font-medium text-white sm:text-xl text-lg">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
        <div className="pt-20 pb-6">
          <h1 className="text-blackk  fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl pb-4">
            Driving Enterprise Excellence with Intelligent Software Solutions
          </h1>
        </div>
        <div className="grid px-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pb-16">
          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200">
            <div className=" rounded-full flex items-start justify-start w-full px-4">
              <FaDatabase size={48} className="text-bloo" />
            </div>
            <div className="pt-6 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl px-4">
                Advanced ERP Systems
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg px-4">
                Implement robust ERP platforms to streamline inventory
                management, optimize resource utilization, and enhance process
                efficiency through automation and real-time tracking..
              </p>
            </div>
          </div>

          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200">
            <div className=" rounded-full  flex items-start justify-start w-full px-4">
              <TiTime size={48} className="text-bloo" />
            </div>
            <div className="pt-6 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl px-4">
                Real-Time Business Process Management
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg px-4">
                Develop intelligent BPM systems that provide real-time tracking,
                dynamic process optimization, and efficient management to ensure
                timely and cost-effective operations.
              </p>
            </div>
          </div>

          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200">
            <div className=" rounded-full  flex items-start justify-start w-full px-4">
              <FaMagnifyingGlass size={48} className="text-bloo" />
            </div>
            <div className="pt-6 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl px-4">
                Business Visibility and Analytics
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg px-4">
                Offer comprehensive business visibility solutions, integrating
                advanced analytics for predictive insights, demand forecasting,
                and improved decision-making across the enterprise network.
              </p>
            </div>
          </div>

          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200">
            <div className=" rounded-full  flex items-start justify-start w-full px-4">
              <GoWorkflow size={48} className="text-bloo" />
            </div>
            <div className="pt-6 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl px-4">
                Automated Workflow Solutions
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg px-4">
                Create automated workflow systems that accelerate task
                completion, reduce manual errors, and enhance employee
                satisfaction through seamless integration with enterprise
                platforms and ERP systems.
              </p>
            </div>
          </div>

          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200">
            <div className=" rounded-full  flex items-start justify-start w-full px-4">
              <PiDrone size={48} className="text-bloo" />
            </div>
            <div className="pt-6 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl px-4">
                IoT-Enabled Enterprise Solutions
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg px-4">
                Deploy IoT-enabled solutions for real-time monitoring of assets,
                predictive maintenance, and enhanced operational efficiency,
                ensuring the integrity and security of data throughout the
                enterprise..
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

export default Legal;
