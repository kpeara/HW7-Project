import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="container mt-4">
                <Link to="/workout">
                    <button className="button mr-2">Work Out!</button>
                </Link>
                <Link to="/meditate">
                    <button className="button mx-2">Meditate</button>
                </Link>
                <Link to="/vent">
                    <button className="button ml-2">Vent</button>
                </Link>
            </div>
        </>
    );
}

export default Home;
