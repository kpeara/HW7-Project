import React, { useEffect, useState } from "react";

function Workout() {
    const [equipment, setEquipment] = useState([]);

    useEffect(() => {
        const getEquipment = async () => {
            try {
                const response = await fetch("http://localhost:8080/equipment");
                const data = await response.json();
                setEquipment(data);
            } catch (err) {
                console.log(err);
            }
        };
        getEquipment();
    }, []);

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
                            {equipment.map((e) => (
                                <a className="dropdown-item">
                                    {e.equipmentName}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Workout;
