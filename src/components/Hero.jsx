//import React from "react";

const Hero = () => {
    return (
      <>
        <div className="container mx-auto px-5">
          <h1 className="text-3xl font-bold text-center mt-12">Stripz ⚡</h1>
        </div>
        <hr className="my-5 border-t-2 border-gray-200 mx-6" />
        <div className="container mx-auto p-5 rounded-lg bg-gray-100">
          <p className="text-center text-lg md:text-3xl mb-5">
            We help you summarize any article within milliseconds.
          </p>
          <p className="text-center text-lg md:text-3xl mb-5">
            Whether it's as long as GTC in Westlands, or as short as a legume
            sprout!!! The unnecessary information will be{" "}
            <span className="font-bold">stripped</span> away 🎈
          </p>
        </div>
      </>
    );
  };
  
  export default Hero;
  
