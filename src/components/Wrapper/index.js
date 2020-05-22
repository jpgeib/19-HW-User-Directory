import React from "react";
import "./style.css";

Wrapper = ({ children }) => {
    return (
        <div className="wrapper">
            { children }
        </div>
    );
};

export default Wrapper;