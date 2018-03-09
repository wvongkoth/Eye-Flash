import React from "react";
import "./MiniCard.css";


const MiniCard = props => (
    <div className={props.translatedLanguage} className="miniCard" onClick={(event)=>{props.clickHandler(props.deckID)}} data-deckID={props.deckID}>
      <p className="centerTextMC">{props.word}</p>
    </div>
);

export default MiniCard;