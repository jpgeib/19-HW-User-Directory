import React from "react";
import Main from "./../../components/Main";
import Wrapper from "./../../components/Wrapper";
import Header from "./../../components/Header";
import "./style.css";

const App = () => {
    return (
        <div className="App">
            <Wrapper>
                <Header />
                <Main />
            </Wrapper>
        </div>
    );
};

export default App;