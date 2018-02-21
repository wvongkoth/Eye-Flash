import React from "react";
import "./Card.css";

const Card = props => (
	<div className="row">
        <div className="col s12 m7">
          	<div className="card">
            	<div className="card-image">
              		<img src={props.image} />
              		<span className="card-title">{props.title}</span>
            	</div>
            	<div className="card-content">
              		{props.content}
            	</div>
          	</div>
        </div>
    </div>
);

export default Card;