import React, { Component } from "react";
import ReactCardFlip from 'react-card-flip';
import "./FrontJC.css";

const FrontJC = props => (
    <div className="jumboCard">
      {props.children}
    </div>
);

export default FrontJC;