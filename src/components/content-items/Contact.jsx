import React from "react";

const Contact = () => {
  return (
    <div className="blur-none w-full h-screen bg-red-200 snap-mandatory motion-safe:animate-fadeIn">
      <div className="  snap-start scroll-mt-32 p-16 mt-56">
        <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700 text-custom-white">
          Contact Me?
        </h2>
        <br />
        <div className=" snap-center m-auto ">
          <p>
            Whatsapp:{" "}
            <a
              href="https://wa.me/917698185041"
              target="_blank"
              className=" hover:underline "
            >
              <span className="text-custom-white">+91-7698185041</span>
            </a>
          </p>
          <p>
            E-Mail:{" "}
            <span className=" text-custom-white ">sdarsh945@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
