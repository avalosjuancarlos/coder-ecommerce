import React from "react";
import NabBar from "./NavBar";

const Home = ({greeting}) => (
    <>
    <div className="d-flex justify-content-center">
    <NabBar />
    </div>
    <div className="d-flex justify-content-center">
        <h1>{greeting }</h1>
    </div>
    </>
);

export default Home;