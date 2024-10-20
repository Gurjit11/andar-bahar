import React from "react";

const AndarBaharPage = () => {
  return (
    <div className="min-h-screen bg-red-900 ">
      <TopMenu />
      <div className="flex flex-col lg:flex-row justify-between p-4">
        <AndarBaharSection />
        <ScoreAndJokerSection />
      </div>
    </div>
  );
};

const TopMenu = () => {
  return (
    <div className="flex justify-between items-center bg-brown-700 p-4 rounded-t-lg border-b-4 border-yellow-600">
      <div className="flex items-center space-x-4">
        <div className="bg-red-700 text-white px-4 py-2 rounded-md font-bold text-xl">
          ANDAR BAHAR
        </div>
        <div className="text-yellow-400 font-bold">Table 1234</div>
      </div>
      <div className="bg-red-700 text-white px-6 py-2 rounded-lg text-xl font-bold">
        MENU
      </div>
    </div>
  );
};

const AndarBaharSection = () => {
  return (
    <div className="flex flex-col w-full lg:w-3/4 bg-red-700 p-4 rounded-lg shadow-lg border-2 border-yellow-600">
      {/* Section A */}
      <div className="flex flex-col justify-between p-4 border-b-4 border-yellow-600">
        <div className="text-white text-4xl font-bold mb-4">A</div>
        <div className="border-dashed border-4 border-yellow-600 rounded-lg w-40 h-60 bg-red-800 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-50">
            <img
              src="/path-to-decorative-pattern.png" // Add background pattern here
              alt="decorative background"
              className="w-32"
            />
          </div>
        </div>
      </div>
      {/* Section B */}
      <div className="flex flex-col justify-between p-4">
        <div className="text-white text-4xl font-bold mb-4">B</div>
        <div className="border-dashed border-4 border-yellow-600 rounded-lg w-40 h-60 bg-red-800 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-50">
            <img
              src="/path-to-decorative-pattern.png" // Add background pattern here
              alt="decorative background"
              className="w-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ScoreAndJokerSection = () => {
  return (
    <div className="flex flex-col justify-start w-full lg:w-1/4 bg-red-700 p-4 rounded-lg shadow-lg border-2 border-yellow-600 ml-4">
      {/* Score */}
      <div className="flex justify-between items-center p-5 py-10 bg-green-600 rounded-lg text-white text-2xl font-bold mb-4">
        <div className="flex items-center space-x-2">
          <div className="bg-red-700 text-white rounded-full w-10 h-10 flex justify-center border-4 border-yellow-500 items-center text-2xl font-bold shadow-md">
            A
          </div>
          <span className="text-white">1</span>
        </div>
      </div>
      <div className="flex justify-between items-center p-5 py-10 bg-white rounded-lg text-black text-2xl font-bold">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-700 text-white rounded-full w-10 h-10 flex justify-center border-4 border-yellow-500 items-center text-2xl font-bold shadow-md">
            B
          </div>
          <span className="text-black">1</span>
        </div>
      </div>

      {/* Joker Section */}
      <div className="mt-6">
        <div className="text-yellow-300 text-4xl font-bold text-center">
          JOKER
        </div>
        <div className="border-dashed border-4 border-yellow-600 rounded-lg w-full h-40 bg-red-800 mt-4 flex items-center justify-center">
          <img
            src="/path-to-ocean7-logo.png" // Add your logo here
            alt="Ocean 7 Casino"
            className="w-32"
          />
        </div>
      </div>
    </div>
  );
};

export default AndarBaharPage;
