import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="py-12 ">
      <div className="flex flex-wrap">
        {/* Mobile Version */}
        <div className="w-full md:hidden mb-5">
          <div className="bg-[#c50101] h-[250px]  flex justify-center items-center mr-3 md:mr-20 flex-col" style={{borderRadius:"0px 300px 300px 0px"}}>
            <div className="w-3/4 text-white">
              <h4 className="text-[clamp(1.0625rem,0.8958rem+0.6667vw,1.4375rem)]">
                Explore the vibrant world of social media and uncover endless
                opportunities for connection, engagement, and growth
              </h4>
              <h6 className="mt-3 text-right pr-5">
                Already a User?{" "}
                <Link to="/login" className="text-white" title="Click To Login">
                  Click Here
                </Link>
              </h6>
            </div>
          </div>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:flex md:w-1/2 w-full mb-5">
          <div className="bg-[#c50101] h-[600px]  flex justify-center items-center mr-3 md:mr-20 flex-col" style={{borderRadius:" 0px 300px 300px 0px "}}>
            <div className="w-3/4 text-white">
              <h4 className="text-[clamp(1.0625rem,0.8958rem+0.6667vw,1.4375rem)]">
                Explore the vibrant world of social media and uncover endless
                opportunities for connection, engagement, and growth
              </h4>
              <h6 className="mt-3 text-right pr-5">
                Already a User?{" "}
                <Link to="/login" className="text-white" title="Click To Login">
                  Click Here
                </Link>
              </h6>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 w-full flex justify-center items-center mb-5 flex-col">
          <h3 className="font-bold mb-3 text-4xl">Register</h3>
          <div className="w-3/4">
            <form className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="my-2">
                  <label htmlFor="name" className="block mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-full h-12 px-3 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="username" className="block mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    className="w-full h-12 px-3 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="phone" className="block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone Number"
                    pattern="[0-9]*"
                    minLength={6}
                    maxLength={10}
                    className="w-full h-12 px-3 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    className="w-full h-12 px-3 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="password" className="block mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="w-full h-12 px-3 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="confirmPassword" className="block mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    className="w-full h-12 px-3 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center items-center w-full my-3">
                <button
                  type="submit"
                  className="py-2 px-4 bg-[#c50101] text-white rounded-lg hover:bg-[#c50101] mt-2"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
