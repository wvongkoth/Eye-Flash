import React, { Component } from "react";
import ReactCardFlip from 'react-card-flip';
import "./BackJC.css";

const BackJC = props => (
    <div className="jumboCard">
      {props.children}
    </div>
);

export default BackJC;