import React, {Component} from "react";
import "./TableJC.css";

class TableJC extends Component {

    constructor (props) {
        super(props);
        this.state = {
            secondClick: false,
            clickedSrc: ""
        }
    }

    clickTable = e => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ 
            secondClick: true, 
            clickedSrc: e.target.src
            }, function () {
                console.log(this.state.firstClick + "console");
            },
        );
      };

    render() {
        const {secondClick} = this.state;
        return (
            <span>
                { secondClick ? 
                    <img src={this.state.clickedSrc} /> : 
                        <span>
                            <table className="threeByThreeIconTable">
                                <tr>
                                    <td>
                                        <img src={this.props.image} onClick={this.clickTable}/>
                                    </td>
                                    <td>
                                        <img src={this.props.image} />
                                    </td>
                                    <td>
                                        <img src={this.props.image} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={this.props.image} />
                                    </td>
                                    <td>
                                        <img src={this.props.image} />
                                    </td>
                                    <td>
                                        <img src={this.props.image} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={this.props.image} />
                                    </td>
                                    <td>
                                        <img src={this.props.image} />
                                    </td>
                                    <td>
                                        <img src={this.props.image} />
                                    </td>
                                </tr>
                            </table>
                        </span>
                }
            </span>
        )
    }

};


                        
export default TableJC;