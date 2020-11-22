import React, { useEffect, useState } from "react";

function Workout() {
    const [equipment, setEquipment] = useState([]);
    const [dropdown, setDropdown] = useState(false);
    const [workout, setWorkout] = useState([]);

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

    const getWorkout = async (equipment) => {
        console.log(equipment);
        try {
            const response = await fetch(
                `http://localhost:8080/workout/${equipment}`
            );
            const data = await response.json();
            console.log(JSON.stringify(data));
            setWorkout(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="container mt-4">
                <div className="dropdown is-active">
                    <div className="dropdown-trigger">
                        <button
                            className="button"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu"
                            onClick={() => setDropdown(!dropdown)}
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
                    {dropdown ? (
                        <div
                            className="dropdown-menu"
                            id="dropdown-menu"
                            role="menu"
                        >
                            <div className="dropdown-content">
                                {equipment.map((e) => (
                                    <a
                                        className="dropdown-item"
                                        onClick={() =>
                                            getWorkout(e.equipmentName)
                                        }
                                    >
                                        {e.equipmentName}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>

                {workout.map((w) => (
                    <>
                        <div>{w.workoutName}</div>
                        <div>Description {w.workoutDescription}</div>
                        <div>Body Part:{w.bodyPart}</div>
                    </>
                ))}
            </div>
        </>
    );
}

export default Workout;
