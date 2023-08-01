import React from "react";
import carShowcase from "../assets/portfolio/carShowcase.png";
import financeDashboard from "../assets/portfolio/financeDashboard.png";
import punjabGrill from "../assets/portfolio/punjabGrill.png";
import socialMedia from "../assets/portfolio/socialMedia.png";
import todoList from "../assets/portfolio/todoList.png";
import wordleBot from "../assets/portfolio/wordleBot.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: carShowcase,
      title: "Car Showcase | Next | TS | Tailwind",
    },
    {
      id: 2,
      src: financeDashboard,
      title: "Finance Dashboard | ML | MERN",
    },
    {
      id: 3,
      src: socialMedia,
      title: "Social Media App | MERN | React | Redux | MUI",
    },
    {
      id: 4,
      src: wordleBot,
      title: "Wordle Helper Bot | React | MUI",
    },
    {
      id: 5,
      src: punjabGrill,
      title: "Restaurant App | React | CSS",
    },
    {
      id: 6,
      src: todoList,
      title: "Todo List | React | TS",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-full md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="px-4 pt-4">{title}</p>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;