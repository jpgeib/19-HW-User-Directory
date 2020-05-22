import React, { Component } from "react";
import "./style.css";

export default class Header extends Component {
    
    render() {
        return (
            <div className="header">
                <h1>User Directory</h1>
                <p>Click on the carrots to filter by heading or use the search box to narrow your results.</p>
            </div>
        );
    }
    
};