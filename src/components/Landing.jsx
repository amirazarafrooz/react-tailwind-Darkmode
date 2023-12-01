import React, { useEffect, useState } from 'react';
import Card from './Card'
import ToggleButton from './ToggleButton';

const Landing = () => {

    const [theme, setTheme] = useState(null);

   

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  
    const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };


    return (
        <div className="relative h-screen dark:bg-[#52796f] bg-[#caf0f8] flex justify-around items-center transition-all">
            <Card theme={theme}/>
            <ToggleButton theme={theme} handleThemeSwitch={handleThemeSwitch}/>
        </div>
    );
};

export default Landing;