import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ph1 from "../assets/phone1.jpg"
import { FiCode, FiInstagram } from "react-icons/fi";


export default function ModCarasoul() {
    return (
        <Carousel>
            <div>
                <img src={ph1} />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src={ph1} />
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                <img src={ph1} />
                {/* <p className="legend">Legend 3</p> */}
            </div>
        </Carousel>
    );
}
