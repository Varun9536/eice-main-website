import React, { useState, useRef } from "react";
import laptop from "../assets/Compressed/Laptop.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "../fontCss.css";

// petroleum
import reli from "../assets/Petroleum/reli.jpeg"
import petrosim from "../assets/Petroleum/petrosim.jpeg"
import espct from "../assets/Petroleum/ESPCT.jpg"
import cgd from "../assets/Petroleum/cgd.jpg"
import simul from "../assets/Petroleum/simul.jpg"
import dmg from "../assets/Petroleum/dmg.jpg"
import scada from "../assets/Petroleum/scada.jpg"
import femms from "../assets/Petroleum/FEMMS.jpeg"
import bsa from "../assets/Petroleum/bsa.jpeg"
import ogpd from "../assets/Petroleum/ogpd.png"


// automobile
import evbm from "../assets/Automobile/evbm.jpg"
import adai from "../assets/Automobile/adai.jpeg"
import ccp from "../assets/Automobile/ccp.jpg"
import mpo from "../assets/Automobile/mpo.jpg"

// medical
import aipdt from "../assets/medical/aipdt.jpeg"
import tmp from "../assets/medical/tmp.jpeg"

// ai anmd ml

import AiLogistics  from "../assets/ai/logistics.jpg"
import AiInventory  from "../assets/ai/inventry.jpg"
import AiVoice  from "../assets/ai/voice.jpg"
import AiSentiments  from "../assets/ai/sentiments.jpg"



const industries = [
  { name: "OIL AND GAS INDUSTRY", id: "gis" },
  // { name: "OIL AND GAS INDUSTRY", id: "oil" },
  { name: "AUTOMOBILE INDUSTRY", id: "auto" },
  { name: "HEALTHCARE INDUSTRY", id: "health" },
  // { name: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING", id: "AiandMl" },
  { name: "AI And ML", id: "AiandMl" },
];

const projects = {
  gis: [
    {
      title: "RE.LI Monitor",
      description: "Developed a Real Time Sensor monitoring tool using SCADA.",
      link: "/Casestudy-Relimonitor",
      img :reli
      
    },
    {
      title: "PetroSIM",
      description:
        "Comprehensive quality assurance and simulation tool for refinery operations.",
      link: "/Casestudy-PetroSIM",
      img : petrosim
    },
    {
      title: "ESPCT Quote",
      description: "Web Based Sales and Quotation Tool",
      link: "/Casestudy-EspctQuote",
      img : espct
    },
    {
      title: "City Gas Distribution",
      description: "Gas Distribution Analysis App for Adani Gas",
      link: "/Casestudy-CityGasAdani",
      img : cgd
    },
    {
      title: "SimuLIFT",
      description:
        "Development of Quote & Sizing Tools for Artificial Lift Methods",
      link: "/Casestudy-SimuLIFT",
      img : simul
    },
    {
      title: "E&P Data Management on GIS",
      description:
        "An Integrated Exploration & Production Data Management System",
      link: "/Casestudy-EPGIS",
      img : dmg
    },
    {
      title: "Engineering Integration with SCADA",
      description: "Development of PLC Information Management System",
      link: "/Casestudy-NoraltaSCADA",
      img : scada
    },
    {
      title: "FEMMS",
      description:
        "Development of Fugitive Emission Monitoring, Estimation & Management System (FEMMS)",
      link: "/Casestudy-NoraltaFEMMS",
      img : femms
    },
    {
      title: "Business Analytics Automation",
      description:
        "Development of Tool for Monitoring of Petroleum Financial Models",
      link: "/Casestudy-SchlumbergerBAA",
      img : bsa
    },
    {
      title: "Oil & Gas Product Development",
      description:
        "Development of Design & Simulation Tool for Production Monitoring in Oil and Gas Industry for BORETS",
      link: "/Casestudy-DesignSimBORETS",
      img : ogpd
    },
  ],
  // oil: [
  //   { title: "Offshore Platform Optimization", description: "Improved production efficiency by 25% through advanced AI-driven monitoring systems." },
  //   { title: "Pipeline Leak Detection System", description: "Reduced environmental risks with real-time leak detection, cutting response time by 60%." },
  //   { title: "Refinery Process Auto mation", description: "Implemented IoT sensors and machine learning to optimize refining processes, saving $5M annually." },
  //   { title: "Seismic Data Analysis Tool", description: "Developed a cloud-based platform for faster seismic data processing, reducing analysis time by 40%." },
  //   { title: "Predictive Maintenance Solution", description: "Created an AI model to predict equipment failures, reducing downtime by 30% and maintenance costs by $2M." },
  //   { title: "Smart Well Management", description: "Designed a real-time well monitoring system, increasing production by 15% across 500 wells." },
  //   { title: "Energy Trading Platform", description: "Built a blockchain-based trading platform, improving transaction security and reducing costs by 20%." }
  // ],
  auto: [
    {
      title: "Electric Vehicle Battery Management",
      description:
        "Developed an advanced BMS increasing EV range by 12% and battery lifespan by 2 years.",
        img : evbm
    },
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
        img : mpo
    },
  ],
  health: [
    {
      title: "AI-Powered Diagnostic Tool",
      description:
        "Developed an AI algorithm for early cancer detection, improving accuracy by 15% over traditional methods.",
        img : aipdt
    },
    {
      title: "Telemedicine Platform",
      description:
        "Created a secure, HIPAA-compliant telehealth solution, facilitating over 1 million virtual consultations.",
        img : tmp
    },
  ],

  AiandMl : [
    {
      title: "VOICE CALL ASSISTANT",
      description: "Developement of an Advanced AI Voice Call Assistant: Revolutionizing Customer Interaction and Efficiency",
      link: "/casestudy-VoiceCallAI",
      img : AiVoice
    },
    {
      title: "Product Review Using Sentimental Analysis",
      description:"Enhancing Product Insights with AI: Advanced Sentiment Analysis of Product Reviews",
      link: "/casestudy-SentimentalAI",
      img : AiSentiments
    },
    {
      title: "Logistics Using AI",
      description: "Transforming Logistics Operations with AI: Enhancing Efficiency and Accuracy", 
      link: "/casestudy-LogisticsAI",
      img : AiLogistics
    },
    {
      title: "Inventory Management Using AI",
      description: "Revolutionizing Inventory Management with AI: Enhancing Accuracy and Efficiency",
      link: "/casestudy-InventoryAI",
      img : AiInventory
    },

    
  ]
};

const CaseStudy = ({ link, title, description, image }) => (
  <Link to={link} className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4">
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
  </Link>
);

function Cstdmain() {
  
  const [activeIndustry, setActiveIndustry] = useState("gis");

  

  return (
    <div className="font-manrope  xl:-mt-4">
      <header className="bg-gradient-to-r from-cyan-100/10 to-bloo/10 w-screen text-white 2xl:py-8 pt-32 pb-8 text-center">
        <h1 className="text-blackk fontsize_6 fontweight_1 mb-4">
          CASE STUDIES
        </h1>
        <p className="text-blackk text-xl  md:text-2xl max-w-3xl py-2 mx-auto px-4">
          Explore{" "}
          <span className="text-bloo fontweight_1">Real-World Examples</span> of
          how EICE has transformed businesses across industries through
          innovative software solutions and unparalleled expertise.
        </p>
      </header>
      <main className="container mx-auto max-w-7xl pt-8">
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
                  link={project.link}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default Cstdmain;
