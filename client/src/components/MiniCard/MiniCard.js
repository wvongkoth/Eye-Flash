import React from "react";
import "./MiniCard.css";

const MiniCard = props => (
    <div className="miniCard" className={props.translatedLanguage}>
      <p className="centerTextMC" id={props.id}>{props.word}</p>
    </div>
);

export default MiniCard;