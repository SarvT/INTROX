import React from "react";
import { useState, useEffect } from "react";

import "./Apply.css";

import { FiCode, FiInstagram } from "react-icons/fi";

const slidesData = [
  [
    "Project 1",
    "Mr.Snake",
    "The old snake game which is now made up with HTML, CSS and JavaScript.JavaScript plays an important role in it (i.e. Logic).",
  ],
  [
    "Project 2",
    "Wall-e Weather",
    "It's a Mobile Application which gives the weather information by cities. Designed and  developed with Flutter, Dart. Gives the weather reports for current and daily forecast.",
  ],
  [
    "Project 3",
    "Muviz",
    "Recommends movies on the basis of selection of the movie by the user. Designed and developed using HTML, CSS, Python, Flask. Model training has done on the basis of TMDB 500 Movie Dataset.",
  ],
];

export default function Projects() {
  return (
    <div>
      <div className="project" id="project" style={{marginTop:"20rem"}}>
        <h3 className="subhead">Projects</h3>

        <div className="slides">
          <div className="project-slide">
            <div className="details">
              <p className="head">{slidesData[0][0]}</p>
              <p className="subhead">{slidesData[0][1]}</p>
              <p className="desc">{slidesData[0][2]}</p>
            </div>

            <div className="img">
              <FiCode  />
            </div>
          </div>
          <div className="project-slide">
            <div className="details">
              <p className="head">{slidesData[1][0]}</p>
              <p className="subhead">{slidesData[1][1]}</p>
              <p className="desc">{slidesData[1][2]}</p>
            </div>

            <div className="img">
              <FiCode size={240} />
            </div>
          </div>
        </div>

        <div className="slides">
          <div className="project-slide">
            <div className="details">
              <p className="head">{slidesData[2][0]}</p>
              <p className="subhead">{slidesData[2][1]}</p>
              <p className="desc">{slidesData[2][2]}</p>
            </div>

            <div className="img">
              <FiCode size={240} />
            </div>
          </div>

          <div className="project-slide">
            <div className="details">
              <p className="head">{slidesData[2][0]}</p>
              <p className="subhead">{slidesData[2][1]}</p>
              <p className="desc">{slidesData[2][2]}</p>
            </div>

            <div className="img">
              <FiCode size={240} />
            </div>
          </div>
        </div>

        {/* <div className="carasoul">
          <ModCarasoul/>
        </div> */}

        {/* <div
          className={`flex transition-transform ease-out duration-500 `}
          style={{
            transform: `translateX(-${curr * 100}%)`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {slides}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <FiInstagram size={40} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <FiInstagram size={40} />
          </button>
        </div> */}

        {/* <div
          className="cara"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "40rem",
          }}
        >
          <Carasoul >
            {slides.map((s) => (
              <img style={{ width: "60rem", height: "auto" }} src={s} />
            ))}
          </Carasoul>
        </div> */}

        {/* <div className="projects-showcase">
          <div
            className="project-slide"
            style={{
              transform: `translateX(-${curr * 100}%)`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <FiCode size={200}/> */}
        {/* {slides.map((s, i) => (
              <div style={{ fontSize: "10rem" }} className="slide-element">
                {s}
              </div>
            ))}
            <p>{slidesData}</p>
          </div> */}
        {/* <div className="project-slide">
            <FiCode size={200} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio dolores tempore iste velit officiis quo corrupti
              blanditiis omnis? Voluptatem deleniti nemo dolore ullam.
            </p>
          </div>
          <div className="project-slide">
            <FiCode size={200} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio dolores tempore iste velit officiis quo corrupti
              blanditiis omnis? Voluptatem deleniti nemo dolore ullam.
            </p>
          </div> */}
      </div>
    </div>
  );
}
