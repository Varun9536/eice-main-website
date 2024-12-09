import React, { useRef, useState } from "react";
import Offeritem from "./Offeritem";
import Ouroffers, { viewmore } from "../Data/Ouroffers";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";

function Offers() {


  const [showmore, setshowmore] = useState(false)

  const myRef = useRef(null)

  const scrollToSection = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    //

    <>
      <div  className="pb-10">
        <div className="text-manrope px-4 py-2  sm:py-2 max-w-7xl mx-auto">
          <div ref={myRef} className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y- justify-items-center">
            {Ouroffers.map((project) => (
              <Offeritem
                key={project.id}
                svg={`data:image/svg+xml;utf8,${encodeURIComponent(project.svg)}`}
                title={project.title}
                link={project.link}
                fliptext={project.fliptext}
              />
            ))}

          </div>
        </div>

        {showmore && (<div className="text-manrope px-4 py-2  sm:py-2 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y- justify-items-center">
            {viewmore.map((project) => (
              <Offeritem
                key={project.id}
                svg={`data:image/svg+xml;utf8,${encodeURIComponent(project.svg)}`}
                title={project.title}
                link={project.link}
                fliptext={project.fliptext}
              />
            ))}

          </div>
        </div>)}






        {!showmore && (<div  style={{ display: "flex", justifyContent: "center" }}>
          <button aria-label="view less" style={{display : "flex" , justifyContent : "center" , alignItems : "center" , gap:"7px" }} onClick={() => setshowmore(true)} className=" py-3 px-8  border border-blue-900 bg-blue-900 text-white font-semibold rounded-md  transition duration-200 hover:bg-blue-900/90 hover:shadow-md hover:shadow-bloo/30">
          
           View More <IoIosArrowDown />
           
          </button>
        </div>)}


        {showmore && (<div style={{ display: "flex", justifyContent: "center" }}>
          <button  aria-label="view more"  style={{display : "flex" , justifyContent : "center" , alignItems : "center" , gap:"7px" }} onClick={() => {
            setshowmore(false);
            scrollToSection();
          }} className=" py-3 px-8  border border-blue-900 bg-blue-900 text-white font-semibold rounded-md  transition duration-200 hover:bg-blue-900/90 hover:shadow-md hover:shadow-bloo/30">
            View less  <MdKeyboardArrowUp />

          </button>
        </div>)}


      </div>

    </>

  );
}

export default Offers;
