import React, { useState, useRef } from "react";
import Footer from "../Othercomps/Footer";
import Copyright from "../Othercomps/Copyright";
import TalkToUs from "../Othercomps/Talktous";
import Reviews from "../Homecomps/Reviews";
import Clients from "../Homecomps/Clients";
import Clientele from "../Homecomps/Clientele";

import { FaCloud, FaDatabase } from "react-icons/fa";

import legal_img from "../assets/industry-images/Legal.png";

import laptop from "../assets/Compressed/Laptop.png";
import healthrect1 from "../assets/Compressed/healthrect1.png";
import healthrect2 from "../assets/Compressed/healthrect2.png";
import healthrect3 from "../assets/Compressed/healthrect3.png";

import random1 from "../assets/Compressed/random1.jpg";
import random2 from "../assets/Compressed/random2.jpg";
import random3 from "../assets/Compressed/random3.jpg";
import random4 from "../assets/Compressed/random4.jpg";
import random5 from "../assets/Compressed/random5.jpg";
import random6 from "../assets/Compressed/random6.jpg";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { BiAnalyse, BiSupport } from "react-icons/bi";
import { GrAnalytics, GrIntegration, GrTest } from "react-icons/gr";
import { MdArchitecture, MdCheckBox } from "react-icons/md";
import { SiTestinglibrary } from "react-icons/si";
import { GiCheckMark } from "react-icons/gi";
import { FcDeployment } from "react-icons/fc";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

// legal

import cms from "../assets/LEgal/cms.jpg"
import cmsoft from "../assets/LEgal/cmsoft.jpg"
import eds from "../assets/LEgal/eds.jpeg"
import lbaas from "../assets/LEgal/lbaas.jpeg"
import lda from "../assets/LEgal/lda.jpg"
import lras from "../assets/LEgal/lras.jpg"


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
    name: "Case Management Systems",
    image: cms,
    description:
      "Designing and implementing systems to streamline case workflows, manage documents, and track deadlines efficiently.",
  },

  {
    id: "telemedicine",
    name: "Legal Document Automation",
    image: lda,
    description:
      "Automating document creation and management to reduce errors, save time, and improve legal document processes",
  },

  {
    id: "analytics",
    name: "E-Discovery Solutions ",
    image: eds,
    description:
      "Developing e-discovery tools for efficient data collection, analysis, and review, ensuring legal compliance and effectiveness. ",
  },

  {
    id: "integration",
    name: "Compliance Management Software ",
    image: cmsoft,
    description:
      "Providing solutions for managing regulatory requirements, tracking compliance tasks, and meeting legal obligations across jurisdictions.",
  },

  {
    id: "mobility",
    name: "Legal Research and Analytics ",
    image: lras,
    description:
      "Offering tools for advanced legal research, data analysis, and case law exploration to support informed legal decisions. ",
  },

  {
    id: "mobilityy",
    name: "Legal Billing and Accounting Solutions  ",
    image: lbaas,
    description:
      "Creating software for accurate time tracking, invoicing, expense management, and financial reporting for legal practices. ",
  },
];

function Legal() {
  const [activeService, setActiveService] = useState(services[0].id);
  const sliderRefs = useRef({});

  return (
    <div className="">
      <div className="sm:max-w-7xl w-screen mx-auto pb-8">
        <div className="sm:max-w-7xl 2xl:pt-12 pt-32 xl:pb-12 pb-4 px-4 w-screen mx-auto grid">
          <img src={legal_img} alt="" className="object-cover w-full px-2" />
          {/* <img src={healthrect2} alt="" />
          <img src={healthrect3} alt="" /> */}
        </div>
        <div className="max-w-7xl mx-auto text-center px-8 flex flex-col gap-2">
          <h1 className="text-blackk  fontweight_1 text-center text-2xl sm:text-2xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl pb-4">
            Innovative{" "}
            <span className="text-bloo">Legal Software Solutions </span> for a
            Modern Legal Practice
          </h1>
          <p className="font-medium text-blackk/60 sm:text-xl text-lg text-justify">
            At EICE Technology, we recognize that the legal industry is evolving
            rapidly, and technology is at the forefront of this transformation.
            Our specialized legal software solutions are designed to streamline
            legal processes, enhance case management, and ensure compliance with
            legal standards. We provide comprehensive services tailored to the
            unique needs of law firms, legal departments, and legal
            professionals, helping you stay ahead in a competitive landscape.
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
            Elevate Your Legal Practice with Our Expert Software Solutions
          </h1>
        </div>
        <div className="grid px-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pb-16">
          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200">
            <div className=" rounded-full flex items-start justify-start w-full px-4">
              <GrAnalytics size={48} className="text-bloo" />
            </div>
            <div className="pt-6 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl px-4">
                Comprehensive Requirements Analysis
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg px-4">
                We conduct detailed analysis to understand your legal practice’s
                needs, ensuring that our software solutions are tailored to
                address specific challenges and improve operational efficiency
              </p>
            </div>
          </div>

          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200">
            <div className=" rounded-full  flex items-start justify-start w-full px-4">
              <MdArchitecture size={48} className="text-bloo" />
            </div>
            <div className="pt-6 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl px-4">
                Innovative Design and Prototyping
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg px-4">
                Our team creates user-friendly interfaces and develops
                prototypes for legal software solutions, incorporating feedback
                to refine features and ensure they meet the demands of legal
                professionals..
              </p>
            </div>
          </div>

          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200">
            <div className=" rounded-full  flex items-start justify-start w-full px-4">
              <GrIntegration size={48} className="text-bloo" />
            </div>
            <div className="pt-6 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl px-4">
                Advanced Software Development and Integration
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg px-4">
                We build robust, scalable legal software solutions with a focus
                on functionality, security, and seamless integration with
                existing systems for effective legal practice management. 
              </p>
            </div>
          </div>

          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200">
            <div className=" rounded-full  flex items-start justify-start w-full px-4">
              <MdCheckBox size={48} className="text-bloo" />
            </div>
            <div className="pt-6 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl px-4">
                Rigorous Testing and Quality Assurance
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg px-4">
                We perform thorough testing and quality assurance to ensure that
                our legal software solutions meet high standards of performance,
                security, and compliance before deployment.
              </p>
            </div>
          </div>

          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200">
            <div className=" rounded-full  flex items-start justify-start w-full px-4">
              <AiOutlineDeploymentUnit size={48} className="text-bloo" />
            </div>
            <div className="pt-6 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl px-4">
                Seamless Deployment and Implementation
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg px-4">
                Our team manages the deployment of legal software solutions,
                providing training and support for a smooth transition and
                ensuring that users can effectively adopt and utilize the new
                systems.{" "}
              </p>
            </div>
          </div>

          <div className="group  p-8 bg-white rounded-md overflow-hidden shadow-sm shadow-white transition-shadow duration-300 hover:shadow-lg hover:shadow-blackk/10 border border-white border-transparent hover:border-gray-200">
            <div className=" rounded-full  flex items-start justify-start w-full px-4">
              <BiSupport size={48} className="text-bloo" />
            </div>
            <div className="pt-6 h-full text-left">
              <h1 className="text-blackk fontweight_1 text-xl pt-1 pb-3 sm:text-2xl px-4">
                Ongoing Maintenance and Support
              </h1>
              <p className="font-medium text-blackk/60 sm:text-xl text-lg px-4">
                We offer continuous maintenance and support services, including
                updates, bug fixes, and performance improvements to keep your
                legal software solutions up-to-date and responsive to evolving
                needs. {" "}
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
