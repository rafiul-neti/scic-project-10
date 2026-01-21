import React from "react";
import FooterHeading from "./FooterHeading";
import {
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";

const icons = [FaXTwitter, FaFacebookF, FaYoutube, FaLinkedinIn]

const Newsletter = () => {
  return (
    <div>
      <FooterHeading className={`mb-6`}>Newsletter</FooterHeading>
      <div className="">
        <div className="join">
          <div>
            <label className="input validator join-item outline-0">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="Your Email" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn bg-red-600 text-white join-item">
            Sign Up
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-5">
        {icons.map((Icon, i) => (
          <span key={i} className="w-12 h-12 bg-black flex items-center justify-center">
            <Icon className="text-red-600" size={20} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Newsletter;
