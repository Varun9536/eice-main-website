import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [otpbox, setotpbox] = useState(false)
  const [otp, setotp] = useState()
  const [activeButton, setActiveButton] = useState(false)

  const handleInputChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const sendOtp = async (e) => {
    setActiveButton(true)
    e.preventDefault();

    try {

      let local = "http://localhost/coding/verification_new/otp.php"
      let host = "https://www.eicetechnology.com/otp.php"


      let response = await axios.post(host, { email: formValues.email })
      console.log(response.data)
      if (response.data.query_result) {
        Cookies.set("email", formValues.email, { expires: 1 })
        Cookies.set("contact", formValues.contact, { expires: 1 })
        Cookies.set("name", formValues.name, { expires: 1 })
        Cookies.set("message", formValues.message, { expires: 1 })
        setotpbox(true)
        alert("Please enter otp for final Submission")
        setActiveButton(false)
      }

      else {
        alert("something went wrong , Please try again later")
        setActiveButton(false)

      }
    } catch (error) {
      console.log(error)
      alert("something went wrong , Please try again later")
      setActiveButton(false)

    }

  };


  const changeEmail = async (e) => {
    setActiveButton(true)
    e.preventDefault()
    try {
      let local = "http://localhost/coding/verification_new/changeEmail.php"
      let host = "https://www.eicetechnology.com/changeEmail.php"
      const response = await axios.post(host, { email: Cookies.get("email") })
      console.log(response.data)
      Cookies.remove("email")
      Cookies.remove("contact")
      Cookies.remove("name")
      Cookies.remove("message")
      setotpbox(false)
      setFormValues({ name: "", email: "", contact: "", message: "" })
      setActiveButton(false)

    } catch (error) {
      Cookies.remove("email")
      Cookies.remove("contact")
      Cookies.remove("name")
      Cookies.remove("message")
      setotpbox(false)
      setFormValues({ name: "", email: "", contact: "", message: "" })
      setActiveButton(false)

    }

  }

  const submitOtp = async (e) => {

    setActiveButton(true)
    e.preventDefault()
    try {
      let postdata = {

        otp: otp,

        name: Cookies.get("name"),
        email: Cookies.get("email"),
        contact: Cookies.get("contact"),
        message: Cookies.get("message"),

      }


      let local = "http://localhost/coding/verification_new/finalsubmission.php";
      let host = "https://www.eicetechnology.com/finalsubmission.php"


      let response = await axios.post(host, postdata)
      console.log(response.data)

      if (!response.data.query_result) {
        alert("wrong otp")
        setActiveButton(false)
        return

      }


      if (response.data.query_result) {
        alert("message sent successful")
        Cookies.remove("email")
        Cookies.remove("contact")
        Cookies.remove("name")
        Cookies.remove("message")
        setotpbox(false)
        setFormValues({ name: "", email: "", contact: "", message: "" })
        setotp("")
        setActiveButton(false)
      }

      else {
        alert("something weent wrong")
        setActiveButton(false)

      }


    } catch (error) {

      Cookies.remove("email")
      Cookies.remove("contact")
      Cookies.remove("name")
      Cookies.remove("message")
      setotpbox(false)
      setFormValues({ name: "", email: "", contact: "", message: "" })
      setotp("")
      setActiveButton(false)

    }

  }

  const onpagerefresh = () => {

    if (Cookies.get("name") && Cookies.get("email") && Cookies.get("contact") && Cookies.get("message")) {
      let name = Cookies.get("name")
      let email = Cookies.get("email")
      let contact = Cookies.get("contact")
      let message = Cookies.get("message")
      setFormValues({ name, email, contact, message })
      setotpbox(true)
    }

  }

  useEffect(() => {
    onpagerefresh()
  }, [])

  return (
    <div className="font-manrope max-w-7xl mx-auto px-4 py-12 pt-28 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg shadow-lg shadow-blackk/20 p-8">
          <h2 className="text-2xl font-semibold text-bloo mb-6">Contact Us</h2>
          <form onSubmit={sendOtp} className="space-y-4">


            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo"
              required
            />


            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo"
              required
            />


            <input
              type="number"
              name="contact"
              value={formValues.contact}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo"
              required
            />


            <textarea
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
              placeholder="Message"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo resize-none"
              required
            ></textarea>

            {!otpbox && (<button
              type="submit"
              className="w-full bg-bloo text-white font-semibold py-2 px-4 rounded-md hover:bg-bloo-dark transition duration-300 ease-in-out"
              disabled={activeButton}>
              Submit
            </button>)}



          </form>

          <form className="space-y-4">

            {otpbox && (<>

              <div style={{ color: "blue" }}>
                OTP successfuly sent on your entered Email address {formValues.email}
              </div>

              <input
                type="text"
                name="otp"
                value={otp}
                onChange={(e) => setotp(e.target.value)}
                placeholder="Please Enter your OTP"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloo"
                required
              />

              <button
                className="w-full bg-bloo text-white font-semibold py-2 px-4 rounded-md hover:bg-bloo-dark transition duration-300 ease-in-out"
                onClick={submitOtp}
                disabled={activeButton}>
                Submit OTP
              </button>

              <button
                className="w-full bg-bloo text-white font-semibold py-2 px-4 rounded-md hover:bg-bloo-dark transition duration-300 ease-in-out"
                onClick={changeEmail}
                disabled={activeButton}>
                Change Email Address
              </button>

            </>
            )}
          </form>
        </div>


        <div className="bg-white rounded-lg shadow-lg shadow-blackk/20 p-8">
          <h2 className="text-2xl font-semibold text-bloo mb-6 text-center">
            Addresses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8">
            <AddressCard
              country="United States"
              company="EICE"
              address="440 Cobia Drive, #901 Katy, Texas 77494"
              phone=""
              email="info@eicetechnology.com"
            />
            <AddressCard
              country="India"
              company="EICE"
              address="B-8 Second Floor Sec-60, Noida 201301"
              phone=""
              email="info@eicetechnology.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function AddressCard({ country, company, address, phone, email }) {
  return (
    <div className="border-2 border-bloo/40 rounded-lg p-4 h-full flex flex-col justify-between">
      <div>
        <h3 className="fontweight_1 text-blackk sm:text-xl text-lg">{country}</h3>
        <p className="font-medium text-blackk/60 sm:text-xl text-lg">{company}</p>
        <p className="font-medium text-blackk/60 sm:text-xl text-lg">{address}</p>
        <p className="font-medium text-blackk/60 sm:text-xl text-lg">{phone}</p>
      </div>
      {/*       <a href={`mailto:${email}`} className="text-sm text-blue-700 hover:underline">
        {email}
      </a> */}
      <Link
        to={`mailto:${email}`}
        className="text-sm pt-2 text-blue-700 hover:underline"
      >
        {email}
      </Link>
    </div>
  );
}

export default ContactForm;