import React, { useState } from "react";

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleForm = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                console.log("success");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <section className="hero is-primary is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">HW7 Project</h1>
                        <h2 className="subtitle">A Hackwestern Project</h2>
                    </div>
                </div>
            </section>
            <div className="container mt-4">
                <form onSubmit={handleForm}>
                    <label className="label">
                        Username:
                        <div>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </label>

                    <label className="label">
                        Password:
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </label>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}

export default App;
