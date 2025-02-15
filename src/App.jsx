import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero";

function App(){
    const [orderPopup,setOderPopup] = useState(false);

    const handleOrderPopup = () =>{
      setOderPopup(!orderPopup)
    }

    useEffect(()=>{
      AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sline",
        delay: 100,
      });
      AOS.refresh();
    }, []);
    return(
      <>
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
          
          <Navbar handleOrderPopup={handleOrderPopup}/>
          <Banner/>
          <Hero handleOrderPopup={handleOrderPopup}/>
        </div>
      </>
    )
}

export default App;
