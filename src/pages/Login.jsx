import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="py-12 bg-[#f0eef6]">
      <div className="flex flex-wrap">
        {/* Mobile version */}
        <div className="md:hidden w-full mb-5">
          <div className="bg-[#c50101] h-[250px] rounded-l-[400px] rounded-b-[180px] flex justify-center items-center ml-3 md:ml-20 flex-col">
            <div className="w-3/4 text-white">
              <h4 className="text-[clamp(1.0625rem,0.8958rem+0.6667vw,1.4375rem)]">
                Explore the vibrant world of social media and uncover endless
                opportunities for connection, engagement, and growth
              </h4>
              <h6 className="mt-3 text-right pr-5">
                New On WebGram?{" "}
                <Link
                  to="/register"
                  className="text-white"
                  title="Click To Register"
                >
                  Click Here
                </Link>
              </h6>
            </div>
          </div>
        </div>

        {/* Common for all devices */}
        <div className="md:w-1/2 w-full flex justify-center items-center mb-5 flex-col">
          <h3 className="font-bold text-4xl">Login</h3>
          <div className="w-3/4">
            <form
              // noValidate
              // validated={validated}
              // onSubmit={handleSubmit}
              className="w-full"
            >
              <div className="grid grid-cols-1 gap-y-4">
                <div className="my-2 mx-3">
                  <label htmlFor="phone" className="block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="phone"
                    placeholder="Phone Number"
                    className="w-full h-12 px-3 border border-gray-300 rounded"
                    required
                   
                  />
                </div>

                <div className="my-2 mx-3">
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
              </div>

              <div className="flex justify-center w-full my-3">
                <button
                  type="submit"
                  className="py-2 px-4 bg-[#c50101] text-white rounded-xl hover:bg-[#c50101]"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Desktop version */}
        <div className="hidden md:flex md:w-1/2 w-full mb-5">
          <div className="bg-[#c50101] h-[600px] rounded-l-[400px] rounded-b-[180px] flex justify-center items-center ml-3 md:ml-20 flex-col">
            <div className="w-3/4 text-white">
              <h4 className="text-[clamp(1.0625rem,0.8958rem+0.6667vw,1.4375rem)] ">
                Explore the vibrant world of social media and uncover endless
                opportunities for connection, engagement, and growth
              </h4>
              <h6 className="mt-3 text-right pr-5 ">
                New On Career Streesman?{" "}
                <Link
                  to="/register"
                  className="text-white"
                  title="Click To Register"
                >
                  Click Here
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
