import styles from "./styles/Hospitality.module.css"

import mainImg from "../assets/hospitalityMain/hospitalitypage/Herosection.png"
import { Link } from "react-router-dom"



import pos from "../assets/Hospitality/hospitalityIcon/pos.png"
import banquet from "../assets/Hospitality/hospitalityIcon/banquet.png"
import employee from "../assets/Hospitality/hospitalityIcon/employee.png"
import finance from "../assets/Hospitality/hospitalityIcon/finance.png"
import foodcost from "../assets/Hospitality/hospitalityIcon/foodcost.png"
import inventry from "../assets/Hospitality/hospitalityIcon/inventry.png"
import member from "../assets/Hospitality/hospitalityIcon/member.png"
import payroll from "../assets/Hospitality/hospitalityIcon/payroll.png"
import room from "../assets/Hospitality/hospitalityIcon/room2.png"
import vendor from "../assets/Hospitality/hospitalityIcon/vendor.png"




// background 




export default function Hospitality() {

    const services = [
        {
            serviceName: "Room Booking",
            img: room,
            width: "",
            link: "/roombooking"
        },

        {
            serviceName: "Dining (POS)",
            img: pos,
            width: "",
            link: "/pos"
        },

        {
            serviceName: "Banquet & Billing",
            img: banquet,
            width: "",
            link: "/banquetAndBilling"
        },

        {
            serviceName: "Member Suite ",
            img: member,
            width: "",
            link: "/memberPortal"
        },

        {
            serviceName: "Accounts & Finances",
            img: finance,
            width: "",
            link: "/accountAndFinance"
        },

        {
            serviceName: "Employee Portal",
            img: employee,
            width: "",
            link: "/employeePortal"
        },

        {
            serviceName: "Payroll",
            img: payroll,
            width: "",
            link: "/payroll"
        },

        {
            serviceName: "User, Store & Inventory",
            img: inventry,
            width: "",
            link: "/storeAndInventry"
        },

        {
            serviceName: "Purchase & Vendor Portal",
            img: vendor,
            width: "",
            link: "/purchaseVendorPortal"
        },

        {
            serviceName: "Food & Beverage Cost Analysis",
            img: foodcost,
            width: "",
            link: "/foodCost"
        }
    ]


    return (
        <>

            <div className={`${styles.mainConatiner} font-manrope bg-white text-manrope  pt-0 pb-12 px-2 lg:max-w-7xl w-screen mx-auto `}>
                <div className={styles.section1}>

                    <div className={styles.headingBox}>

                        <div className={styles.mainHeading}>
                            Flexible, modular solutions tailored to your business needs

                        </div>

                        <div className={styles.mainSubHeading}>
                            we believe hospitality goes beyond providing accommodation; it’s about crafting unique and memorable experiences. From luxurious stays to exquisite dining, our services are designed to cater to your every need
                        </div>


                    </div>

                    <div className={styles.mainImageBox}>
                        <img className={styles.mainImage} src={mainImg} alt="" />
                        <div>

                            <img src="" alt="" />
                        </div>
                    </div>
                </div>



                {/* section2 */}

                <div className={styles.section2}>

                    <div className={styles.section2Heading}>
                        Key Services Overview
                    </div>

                    <div className={styles.section2SubHeading}>
                        Comprehensive Hospitality Services Crafted for an Exceptional Guest Experience
                    </div>


                    <div className={styles.featuresBox}>


                        {services.map((item) =>
                        (
                            <Link to={item.link}>
                                <div className={styles.featuresAndImg}>

                                    <div >

                                        <div className={styles.featuresHeading}>{item.serviceName}</div>
                                        <div className={styles.featuresDescription}>{item.description}</div>

                                    </div>

                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <img style={{ maxWidth: "100%", width: "70%" }} src={item.img} alt="" />
                                    </div>
                                </div>
                            </Link>


                        ))}



                    </div>



                </div>

            </div>

        </>

    )
}
