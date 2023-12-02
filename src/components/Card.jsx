import React, { useEffect, useState } from 'react';
import light from "../assets/images/present-light.svg";
import dark from "../assets/images/present-dark.svg";

const Card = ({theme}) => {


    return (
        <div className="flex flex-col-reverse h-auto p-5  md:flex-row justify-center items-center rounded-2xl shadow-2xl dark:bg-[#2f3e46] bg-[#90e0ef]  md:h-[500px] w-full xl:w-[1400px]  md:px-6 transition-all">

        {/* text  */}
        <div className=" md:w-1/2 flex justify-center items-start flex-col text-center md:text-left px-4">
          <p className="xl:text-4xl text-3xl font-bold dark:text-white w-full">hey</p>
          <p className="xl:text-4xl text-3xl font-bold dark:text-white mt-4 w-full">I'm Amirhosein </p>
          <p className="xl:text-lg  text-base font-medium dark:text-gray-300 mt-4 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            magnam, harum quasi tenetur ipsum doloremque repellat sint voluptate
            neque voluptatibus consectetur, iste eos dolorem! Sunt rerum
            reprehenderit adipisci maiores soluta atque necessitatibus maxime,
            recusandae provident voluptatem culpa ipsa itaque iste!
          </p>
          <button className="w-full md:w-40 mt-10 rounded-2xl px-5 py-2 dark:bg-[#81b29a] bg-[#0077b6] text-xl font-bold text-white  flex justify-center items-center">contact me!</button>
        </div>
        {/* image */}
        <div className="w-1/2 flex justify-center items-center">
          {theme === "dark" ? <img src={dark} className="md:h-[500px] md:w-[500px]"></img>
          : (
            <img src={light} className="md:h-[500px] md:w-[500px]"></img>
          )}
        </div>
  
        </div>
  
    );
};

export default Card;