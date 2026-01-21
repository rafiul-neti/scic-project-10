"use client"
import TitleAndHeading from "@/Components/Shared/TitleAndHeading";
import React from "react";

const ContactForm = () => {
  const handleContactForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="">
      <form onSubmit={handleContactForm} className="space-y-3.5">
        <div className="">
          <TitleAndHeading
            heading={`Have Any Query? Please Contact Us!`}
            title={`Contact Us`}
            titleText={`bg-black`}
            headingClass={`text-left!`}
          />
        </div>

        <div className="flex items-center gap-3">
          <fieldset className="fieldset w-full">
            <input type="text" className="input " placeholder="Your Name" />
          </fieldset>

          <fieldset className="fieldset w-full">
            <input type="email" className="input" placeholder="Your Email" />
          </fieldset>
        </div>

        <div className="">
          <fieldset className="fieldset">
            <input type="text" className="input w-full" placeholder="Subject" />
          </fieldset>
        </div>

        <div className="">
          <fieldset className="fieldset">
            <textarea
              className="textarea h-24 w-full"
              placeholder="Message"
            ></textarea>
          </fieldset>
        </div>

        <button
          type="submit"
          className="btn btn-block bg-red-600 py-7 text-xl font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
