

import React from "react";

import styles from "./Styles/case.module.css"
import { Link } from "react-router-dom";


function Casestudies() {
  return (
    <>

      <div className=" font-manrope ">

        <h2 className="text-bloo  text-center fontsize_2 fontweight_1  ">
          Case Study
        </h2>
        <h1 className="text-blackk  fontweight_1 text-center text-2xl sm:text-3xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1">
          Explore the journeys behind the successful products we deliver
        </h1>


        <div className={styles.case_box}>



          <Link to={"/Industries-Healthcare"}>
            <div className={styles.big_img}>

              <div className={styles.heading}>
                HEALTHCARE
              </div>
              <div className={styles.sub_heading}>
                Innovative solutions to improve patient care and streamline healthcare operations.
              </div>

            </div>
          </Link>

          <div className={styles.four_img}>

            <div className={styles.upper}>


              {/* upper image 1 */}

              <Link to={"Casestudies"}>
                <div className={styles.upper1}>
                  <div className={styles.right_subheadimg}>
                    Connect Car Platform
                  </div>
                </div>
              </Link>



              {/* upper img 2 */}

              <Link to={"Casestudies"}>
                <div className={styles.upper2}>
                  <div className={styles.right_subheadimg}>
                    EV Battery Management
                  </div>
                </div>
              </Link>


            </div>

            <div className={styles.lower}>


              <Link to={"/Casestudy-DesignSimBORETS"}>
                <div className={styles.lower1}>
                  <div className={styles.right_subheadimg}>
                    OIL And Gas Products
                  </div>
                </div>
              </Link>


              <Link to={"/Casestudy-SimuLIFT"}>
                <div className={styles.lower2}>
                  <div className={styles.right_subheadimg}>Simulift</div>
                </div>
              </Link>



            </div>


          </div>
        </div>



      </div>

    </>
  );
}

export default Casestudies;
