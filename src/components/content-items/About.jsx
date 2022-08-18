import React from "react";

const About = () => {
  return (
    <div className="blur-none w-full h-screen bg-red-200 snap-mandatory motion-safe:animate-fadeIn">
      <div className="  snap-start scroll-mt-32 p-16 mt-56">
        <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700 text-custom-white">
          Background
        </h2>
        <br />
        <p>
          I am polishing by<span className=" font-extrabold "> UI Skills</span>{" "}
          and currently looking for work in the area of
          <span className=" font-extrabold "> ReactJS Development.</span>
          <br />I completed my High School in 2021 in the field of{" "}
          <span className="font-extrabold">Biology.</span>
        </p>
        <br />
        <p>
          As a <span className="font-extrabold">developer</span>, I enjoy
          bridging the gap between engineering and design — combining my
          technical knowledge with my keen eye for design to create a beautiful
          product. My goal is to always build applications that are scalable and
          efficient under the hood while providing engaging, pixel-perfect user
          experiences.
        </p>
        <br />
        <p>
          <span className="font-extrabold">
            When I'm not in front of a computer screen,
          </span>{" "}
          I'm probably snowboarding, cruising around on my penny board, or
          crossing off another item on my bucket list.
        </p>
      </div>
    </div>
  );
};

export default About;
