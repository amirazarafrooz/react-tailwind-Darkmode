import React, { useEffect, useState } from 'react';
import moon from "../assets/images/present-moon.svg";
import sun from "../assets/images/present-sun.svg";

const ToggleButton = ({theme,handleThemeSwitch}) => {

   



    return (
      
    <div onClick={handleThemeSwitch} className="absolute top-6 right-6 w-14 h-7 px-1 flex items-center rounded-full p- dark:bg-[#81b29a] bg-[#0077b6]">
    <button  className="">
     {theme === "dark" ? <img className="w-5 ml-7 transition-all " src={moon}></img> 
     :(
       <img className="w-5 transition-all" src={sun}></img>
     )}
    </button>
    </div>
    );
};

export default ToggleButton;