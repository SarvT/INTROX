import React from "react";
import { useState, useEffect } from "react";

import "./Apply.css";

import { FiCode, FiTool,   } from "react-icons/fi";
import{FaNoteSticky, FaRegFileVideo} from "react-icons/fa6"
import{ImBlog} from "react-icons/im"
import { Link } from "react-router-dom";


const slidesData = [
  [
    "Android Application",
    "Mobilus",
    "Meet Mobilus – Your dedicated Kotlin app for saving and enjoying WhatsApp statuses. Explore its features and installation process by clicking below.",
    "https://github.com/SarvT/Moblius"
  ],
  [
    "Android Application",
    "Writeups",
    "Explore Writeups, your sleek Kotlin app for effortless article management. Click below to discover its features and embark on organized content creation.",
    "https://github.com/SarvT/Writeups"
  ],
  [
    "Web App (ML)",
    "Muviz",
    "Recommends movies on the basis of selection of the movie by the user. Designed and developed using HTML, CSS, Python, Flask. Model training has done on the basis of TMDB 500 Movie Dataset.",
    "https://github.com/SarvT/Miz-TheMovieRecommender"
  ],
  [
    "Web App (MERN)",
    "Notevote",
    "Dive into our MERN Blog Platform. Create, share, and connect with a vibrant community of bloggers. Click below to explore features and contribute to the project.",
    "https://github.com/SarvT/notevote"
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
              <Link href={slidesData[0][3]} className="redirect">Read more...</Link>
            </div>

            <div className="img">
              <FiCode size={200} />
            </div>
          </div>
          <div className="project-slide">
            <div className="details">
              <p className="head">{slidesData[1][0]}</p>
              <p className="subhead">{slidesData[1][1]}</p>
              <p className="desc">{slidesData[1][2]}</p>
              <Link href={slidesData[1][3]} className="redirect">Read more...</Link>
            </div>

            <div className="img">
              <FaRegFileVideo size={200} />
            </div>
          </div>
        </div>

        <div className="slides">
          <div className="project-slide">
            <div className="details">
              <p className="head">{slidesData[2][0]}</p>
              <p className="subhead">{slidesData[2][1]}</p>
              <p className="desc">{slidesData[2][2]}</p>
              <Link href={slidesData[2][3]} className="redirect">Read more...</Link>
            </div>

            <div className="img">
              <FiTool size={200} />
            </div>
          </div>

          <div className="project-slide">
            <div className="details">
              <p className="head">{slidesData[3][0]}</p>
              <p className="subhead">{slidesData[3][1]}</p>
              <p className="desc">{slidesData[3][2]}</p>
              <Link href={slidesData[3][3]} className="redirect">Read more...</Link>
            </div>

            <div className="img">
              <ImBlog size={200} />
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
