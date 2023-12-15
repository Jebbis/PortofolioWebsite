import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Lasse</span> 👋 <br /> A Software
      Developer from Finland. <br /> Move through the island using mouse or ⬅️➡️
      keys!
    </h1>
  ),
  2: (
    <InfoBox
      text="I've picked up quite a bag of skills on my journey."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="To showcase my skills I have gathered some of my projects here!"
      link="/projects"
      btnText="Visit portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Contact me for your next adventure!"
      link="/contact"
      btnText="Let's talk"
    />
  ),
  5: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Have you tried turning on the sounds 🔊 and darkmode 🌙 <br /> from the
      bottom of the screen?
    </h1>
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
