import React from "react";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <div>
      <div className="blur-none w-full h-screen bg-red-200 snap-mandatory motion-safe:animate-fadeIn">
        <div className="  snap-start scroll-mt-32 p-16 mt-56">
          <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700 text-custom-white">
            Projects
          </h2>
          <br />
          <ProjectItems />
        </div>
      </div>
    </div>
  );
};

export default Projects;
