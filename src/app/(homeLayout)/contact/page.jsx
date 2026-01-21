import ContactForm from "@/Components/Forms/ContactForm/ContactForm";
import PageTop from "@/Components/Shared/PageTop";
import React from "react";

const ContactUs = () => {
  return (
    <section className="">
      <PageTop pageTitle={"contact"} />

      <div className="mt-20 bg-[#191C24]">
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center lg:justify-center gap-5">
          <div className="p-5">
            <ContactForm />
          </div>
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28969.832307773155!2d88.93958140000001!3d24.8218398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1768879059030!5m2!1sen!2sbd"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
