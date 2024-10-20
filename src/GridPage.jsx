import React from "react";

const GridPage = () => {
  return (
    <div className="bg-yellow-400 p-2 text-center">
      <div className="bg-yellow-200 p-4 text-center shadow-lg rounded-lg">
        <Header />
        <GameGrid />
        <div className="flex justify-between bg-brown-700  rounded-lg shadow-lg border-2 border-yellow-600">
          <BettingSection />
          <Statistics />
          <AndarBaharButtons />
        </div>
        <Footer />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="relative bg-red-700 text-white text-center py-4 rounded-t-lg border-b-4 border-yellow-600">
      <div className="absolute top-0 left-0 p-4 text-yellow-300 font-bold">
        OCEAN 7 CASINO
      </div>
      <div className="text-4xl font-extrabold tracking-wide">ANDAR BAHAR</div>
      <div className="absolute top-0 right-0 p-4 text-yellow-300">
        Table 1234
      </div>
    </div>
  );
};

const GameGrid = () => {
  return (
    <div className="bg-red-600">
      <div className="max-w-2xl  mx-auto">
        <div className="grid grid-cols-8  p-10  rounded-b-lg">
          {[...Array(40)].map((_, index) => (
            <div className="flex justify-center items-center py-2">
              <div
                key={index}
                className="w-16 h-16 bg-red-800 rounded-full border-2 border-red-900 shadow-md"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BettingSection = () => {
  return (
    <div className="bg-brown-900 p-4 rounded-lg border-2 border-gray-400 shadow-lg text-left w-1/4">
      <div className="text-yellow-300 text-center font-semibold">
        <p className="text-2xl font-bold mb-1">Bets</p>
        <p className="text-lg">Max: 20,000</p>
        <p className="text-lg">Min: 1,000</p>
      </div>
    </div>
  );
};

const Statistics = () => {
  return (
    <div className="bg-brown-900 text-yellow-300 p-4 rounded-lg border-2 border-gray-400 shadow-lg w-2/4">
      <div className="text-center text-2xl font-bold mb-2">STATISTICS</div>
      <div className="flex justify-center items-center space-x-2">
        <div className="bg-red-700 text-white rounded-full w-12 h-12 flex justify-center items-center text-2xl font-bold shadow-md">
          A
        </div>
        <div className="flex items-center">
          <div className="bg-red-600 h-8 w-24 flex items-center rounded-l-full">
            <div className="bg-yellow-400 h-full w-1/2"></div>
          </div>
          <div className="bg-blue-600 h-8 w-24 flex items-center rounded-r-full">
            <div className="bg-blue-400 h-full w-1/2"></div>
          </div>
        </div>
        <div className="bg-blue-700 text-white rounded-full w-12 h-12 flex justify-center items-center text-2xl font-bold shadow-md">
          B
        </div>
      </div>
    </div>
  );
};

const AndarBaharButtons = () => {
  return (
    <div className="flex justify-center border-2 border-gray-400 items-center space-x-6 w-1/4">
      <div className="flex flex-col items-center">
        <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-md border-8 border-yellow-600">
          A
        </div>
        <div className="text-yellow-300 mt-2 text-2xl font-semibold">Andar</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-md border-8 border-yellow-600">
          B
        </div>
        <div className="text-yellow-300 mt-2 text-2xl font-semibold">Bahar</div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="mt-8 text-yellow-800 text-sm bg-yellow-300 p-2 rounded-md text-center">
      This is the result display screen. All table results and management's
      decision will be final.
    </div>
  );
};

export default GridPage;
