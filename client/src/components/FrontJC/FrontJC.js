import React from "react";
import "./FrontJC.css";

const FrontJC = props => (
    <div className="jumboCardFront">
        {props.children}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.83 61.01">
		    <title>cornerTab</title>
		      <g id="cornerTab" data-name="Layer 1">
		          <polygon class="cornerTab z-depth-3" points="59.83 61.01 59.83 0 1.18 0 0 1.18 59.83 61.01" />
		      </g>
		</svg>
    </div>
);

export default FrontJC;