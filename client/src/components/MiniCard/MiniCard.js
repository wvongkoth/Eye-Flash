import React from "react";
import "./MiniCard.css";

const MiniCard = props => (
    <div className={props.translatedLanguage} className="miniCard z-depth-3" onClick={(event)=>{props.clickHandler(props.deckID)}} data-deckID={props.deckID}>
        <svg className="cornerTabMC" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.83 61.01">
		    <title>cornerTabMC</title>
		    <g id="cornerTabMC" data-name="Layer 1">
		          <polygon className="cornerTabMC" points="59.83 61.01 59.83 0 1.18 0 0 1.18 59.83 61.01" />
		    </g>
		</svg>
	  <p className="translatedLanguageInitials">{props.initials}</p>
      <p className="centerTextMC">{props.word}</p>
    </div>
);

export default MiniCard;