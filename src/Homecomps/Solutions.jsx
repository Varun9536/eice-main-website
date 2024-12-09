
// import styles from "./Styles/solutions.module.css"


// import digital from "../assets/home_industry_images/digital1.webp"
// import education from "../assets/home_industry_images/education1.webp"
// import enterprise from "../assets/home_industry_images/Enterprise1.webp"
// import financial from "../assets/home_industry_images/Financial1.webp"
// import health from "../assets/home_industry_images/health1.webp"
// import legal from "../assets/home_industry_images/Legal1.webp"
// import logistics from "../assets/home_industry_images/Logistics1.webp"
// import oil from "../assets/home_industry_images/oil1.webp"

// import React, { useState, useEffect } from "react";
// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import { Link } from "react-router-dom";

// function Solutions() {

//   const images = [health, digital, education, enterprise, financial, legal, oil, logistics];

//   const phoneContent = [
//     {
//       img: health,
//       imgname: "Health"

//     },
//     {
//       img: digital,
//       imgname: "Digital"

//     },

//     {
//       img: education,
//       imgname: "Education"

//     },

//     {
//       img: enterprise,
//       imgname: "Enterprise"

//     },

//     {
//       img: financial,
//       imgname: "Financial"

//     },

//     {
//       img: legal,
//       imgname: "Legal"

//     },

//     {
//       img: oil,
//       imgname: "Oil & Gas"

//     },

//     {
//       img: logistics,
//       imgname: "Logistics"

//     }


//   ]
//   const slides = [
//     {
//       content: (
//         <div className={styles.mainbox}>

//           <div className={styles.innerbox} >
//             <img className={styles.imgsize} src={health} alt="" />

//             <div className={styles.text} >
//               <div className={styles.headimg}>HEALTHCARE</div>
//               <div>Innovative solutions to improve patient care and streamline healthcare operations</div>
//             </div>

//           </div>


//           <div className={styles.innerbox}>
//             <img className={styles.imgsize} src={digital} alt="" />
//             <div className={styles.text} >
//               <div className={styles.headimg}>DIGITAL MEDIA</div>
//               <div>Advanced solutions for content creation, distribution and monetization</div>
//             </div>
//           </div>


//           <div className={styles.innerbox}>
//             <img className={styles.imgsize} src={education} alt="" />
//             <div className={styles.text} >
//               <div className={styles.headimg} >EDUCATION</div>
//               <div>Digital tools that enhance learning and administrative efficiency</div>
//             </div>
//           </div>

//         </div>
//       ),
//     },
//     {
//       content: (

//         <div className={styles.mainbox}>


//           <div className={styles.innerbox}>
//             <img className={styles.imgsize} src={enterprise} alt="" />
//             <div className={styles.text} >
//               <div className={styles.headimg} >ENTERPRISE</div>
//               <div>Driving Enterprise Excellence with Intelligent Software Solutions</div>
//             </div>
//           </div>



//           <div className={styles.innerbox}>
//             <img className={styles.imgsize} src={financial} alt="" />
//             <div className={styles.text} >
//               <div className={styles.headimg} >FINANCIAL SERVICES</div>
//               <div>Transforming financial services with IT solutions for seamless operations and compliance</div>
//             </div>
//           </div>


//           <div className={styles.innerbox}>
//             <img className={styles.imgsize} src={legal} alt="" />

//             <div className={styles.text} >
//               <div className={styles.headimg} >LEGAL</div>
//               <div>Innovative Legal Software Solutions for a Modern Legal Practice</div>
//             </div>
//           </div>

//         </div>
//       ),
//     },
//     {
//       content: (
//         <div className={styles.mainbox}>

//           <div className={styles.innerbox}>
//             <img className={styles.imgsize} src={oil} alt="" />
//             <div className={styles.text} >
//               <div className={styles.headimg} >OIL & GAS</div>
//               <div> Pioneering the Future of Oil and Gas with State-of-the-Art Solutions</div>

//             </div>
//           </div>



//           <div className={styles.innerbox}>
//             <img className={styles.imgsize} src={logistics} alt="" />

//             <div className={styles.text} >
//               <div className={styles.headimg} >LOGISTICS</div>
//               <div>Optimizing logistics with tailored solutions for efficient operations and timely deliveries</div>
//             </div>
//           </div>

//         </div>
//       ),
//     },
//     // ... Similar structure for other slides ...
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [currentIndex2, setCurrentIndex2] = useState(0);
//   const [width, setWidth] = useState(window.innerWidth)


//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//     };
//     window.addEventListener('resize', handleResize);

//     // Cleanup the event listener on unmount
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );

//     setCurrentIndex2((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//     );

//     setCurrentIndex2((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 2000);
//     return () => clearInterval(interval);
//   });




//   return (
//     <div>

//       <div className="font-manrope mb-5 py-4 px-4 sm:px-6 lg:px-8">

//         <h2 className="text-bloo  text-center fontsize_2 fontweight_1 py-2 ">
//           Industries We Serve
//         </h2>
//         <h1 className="text-blackk  fontweight_1 mb-9 text-center text-2xl sm:text-3xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
//           IT & Software Development Solutions for Industries
//         </h1>

//         <div className="relative overflow-hidden font-manrope text-blackk pb-4">

//           <div className="  absolute inset-0 bg-bannerbg bg-cover bg-center bg-blend-overlay"></div>
//           <div className="relative z-10 ">

//             {width > 1000 ? (<div className="container mx-auto px-4 sm:px-2 xl:px-8">
//               <TransitionGroup className="min-h-[500px]  sm:min-h-[450px]">
//                 <CSSTransition
//                   key={currentIndex}
//                   timeout={500}
//                   classNames=""
//                   exit={false}
//                 >
//                   <div className="px-2 xl:px-12">
//                     {slides[currentIndex].content}
//                   </div>
//                 </CSSTransition>
//               </TransitionGroup>
//               <div className="flex justify-center mt-12">
//                 <div className="flex space-x-4">
//                   {slides.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentIndex(index)}
//                       className={`w-6 h-2 rounded-full ${currentIndex === index ? "bg-blue-900" : "bg-bloo/20"
//                         }`}
//                     />
//                   ))}
//                 </div>
//               </div>
//               <div className="absolute xl:block hidden top-1/2 left-2 sm:left-4 transform -translate-y-1/2">
//                 <button
//                   onClick={prevSlide}
//                   className="text-blackk/50 hover:text-blackk"
//                 >
//                   <BsChevronLeft size={24} sm:size={30} />
//                 </button>
//               </div>

//               <div className="absolute xl:block hidden top-1/2 right-2 sm:right-4 transform -translate-y-1/2">
//                 <button
//                   onClick={nextSlide}
//                   className="text-blackk/50 hover:text-blackk"
//                 >
//                   <BsChevronRight size={24} sm:size={30} />
//                 </button>
//               </div>
//             </div>) :

//               (<div style={{ width: "80%", margin: "0px auto" }}>
//                 <div className={styles.innerBoxPhone} >


//                   <img
//                     src={images[currentIndex2]}
//                     alt={`Client ${currentIndex2 + 1}`}
//                     style={{}}
//                   />
//                   <div>
//                     <div>{phoneContent[currentIndex2].imgname}</div>
//                   </div>

//                 </div>

//                 <div className="dots" style={{ textAlign: 'center', marginTop: '10px' }}>
//                   {images.map((_, index) => (
//                     <span
//                       key={index}
//                       style={{
//                         height: '8px',
//                         width: '16px',   // Increase width for cylindrical shape
//                         margin: '0 5px',
//                         backgroundColor: index === currentIndex2 ? '#1e3a8a' : 'rgb(1 176 241 / 0.3)',
//                         display: 'inline-block',
//                         borderRadius: '10px',   // Makes it cylindrical
//                         cursor: 'pointer'
//                       }}
//                       onClick={() => setCurrentIndex2(index)}
//                     ></span>
//                   ))}
//                 </div>
//               </div>)}

//           </div>
//         </div>
//       </div>


//     </div>


//   );
// }

// export default Solutions;

import React from "react";
import arrow from "../assets/arrow.svg";
import { Routes, Route, Outlet, NavLink, Link } from "react-router-dom";

function Solutions() {
  const industries = [
    {
      link: "industries-healthcare",
      name: "HEALTHCARE",
      description:
        "Innovative solutions to improve patient care and streamline healthcare operations",
      bgClass: "bg-healthcare",
    },
    {
      link: "industries-financial",
      name: "FINANCIAL",
      description:
        "Secure software to streamline solutions and enhance customer experience",
      bgClass: "bg-finance",
    },
    {
      link: "industries-digitalmedia",
      name: "DIGITAL MEDIA",
      description:
        "Advanced solutions for content creation, distribution and monetization",
      bgClass: "bg-digimedia",
    },
    {
      link: "industries-education",
      name: "EDUCATION",
      description:
        "Digital tools that enhance learning and administrative efficiency",
      bgClass: "bg-education",
    },
  ];

  return (
    <div className="font-manrope py-12 sm:py-12 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-bloo font-bold text-center text-xl sm:text-xl lg:text-2xl  py-2 ">
          Industries We Serve
        </h2>
        <h1 className="text-blackk  font-bold text-center text-2xl sm:text-3xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
          IT & Software Development Solutions for Industries
        </h1>

        <div className="grid grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            to="/industries"
            className="inline-flex items-center justify-center py-4 px-7  border border-blue-900 bg-blue-900 text-white font-semibold rounded-md text-lg transition duration-200 hover:bg-blue-900/90 hover:shadow-md hover:shadow-bloo/30"
          >
            View More <img src={arrow} alt="" className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function IndustryCard({ name, description, bgClass, link }) {
  return (
    <div
      className={`relative ${bgClass} bg-cover rounded-lg cursor-pointer transition duration-200 hover:shadow-lg hover:shadow-blackk h-[20rem] sm:h-[25rem] lg:h-[30rem]`}
    >
      <Link
        to={`/${link}`}
        className="absolute inset-0 bg-gradient-to-t from-stone-900/90 from-20% via-stone-800/95 via-20% to-transparent rounded-lg flex flex-col justify-end p-4"
      >
        <h3 className="text-stone-100 font-extrabold text-2xl sm:text-3xl mb-2">
          {name}
        </h3>
        <p className="text-white font-semibold text-sm sm:text-base">
          {description}
        </p>
      </Link>
    </div>
  );
}

export default Solutions;

