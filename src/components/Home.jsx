import React from "react";
import Button from "../layouts/Button";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/choclatecake.jpg')] bg-cover">
        <div className="w-full lg:w-2/3 space-y-5">
            <h1 className="text-backgroundColor font-semibold text-6xl">Satisfy every Craving</h1>
            <p className="text-backgroundColor font-semibold text-xl">lorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam</p>
        <div className="lg:pl-50">
            <Button title = "Buy now"/>
        </div>
        </div>
        
        </div>
    )
}

export default Home;