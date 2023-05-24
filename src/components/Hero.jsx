import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="" className="w-28 object-contain" />

        <button
          type="button"
          className="black_btn"
          onClick={() => window.open("https://github.com/cloud-dev101")}
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarise Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GTP-4</span>
      </h1>

      <h2 className="desc">
        Simplify your reading with Summarise, a GPT-4 based article Summariser
        for the modern student
      </h2>
    </header>
  );
};

export default Hero;
