import React from "react";
import "./MiniCard.css";

const MiniCard = props => (
    <div className="miniCard">
      <p className="centerTextMC">minicard I like Taco Bell. {props.fontText}</p>
    </div>
);

export default MiniCard;