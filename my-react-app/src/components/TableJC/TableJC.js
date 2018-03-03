import React from "react";
import "./TableJC.css";

const TableJC = props => (
    <span>
    	<table className="threeByThreeIconTable">
		  <tr>
		    <td>
		      <img src={props.image1}>
		    </td>
		    <td>
		      <img src={props.image2}>
		    </td>
		    <td>
		      <img src={props.image3}>
		    </td>
		  </tr>
		  <tr>
		    <td>
		      <img src={props.image4}>
		    </td>
		    <td>
		      <img src={props.image5}>
		    </td>
		    <td>
		      <img src={props.image6}>
		    </td>
		  </tr>
		  <tr>
		    <td>
		      <img src={props.image7}>
		    </td>
		    <td>
		      <img src={props.image8}>
		    </td>
		    <td>
		       <img src={props.image9}>
		    </td>
		  </tr>
		</table>
    </span>
);

export default TableJC;