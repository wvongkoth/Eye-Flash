import React from "react";
import "./WordJC.css";

const WordJC = props => (
    <span className="wordJumboCard" id={props.id} onClick={() => props.clickWord(props.id)}>{props.word}</span>
);

export default WordJC;