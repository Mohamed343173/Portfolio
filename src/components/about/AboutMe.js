import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Mohamed Ridha</h2>
          <p className="text-base leading-6 ">
            Web designer from Tunisia. I don't have rich experience in web
            site design and building this is my first year  
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            21
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Tunisia
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Student:</span>
            1st year at Digital School
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Tunis
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
