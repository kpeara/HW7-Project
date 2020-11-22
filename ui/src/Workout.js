import React from "react";

function Workout() {
    return (
        <>
            <div className="container mt-4">
                <div className="dropdown is-active">
                    <div className="dropdown-trigger">
                        <button
                            className="button"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu"
                        >
                            <span>Select Workout</span>
                            <span className="icon is-small">
                                <i
                                    className="fas fa-angle-down"
                                    aria-hidden="true"
                                ></i>
                            </span>
                        </button>
                    </div>
                    <div
                        className="dropdown-menu"
                        id="dropdown-menu"
                        role="menu"
                    >
                        <div className="dropdown-content">
                            <a className="dropdown-item">Dropdown item</a>
                            <a className="dropdown-item">Other dropdown item</a>
                            <a href="#" className="dropdown-item">
                                Active dropdown item
                            </a>
                            <a href="#" className="dropdown-item">
                                Other dropdown item
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Workout;
