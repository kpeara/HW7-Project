import React, { useState } from "react";

function Form() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleForm = async (e) => {
        e.preventDefault();
        let regex = /^\s*$/;
        if (username.match(regex) || password.match(regex)) return;

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

                <input
                    className="button is-info"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
}

export default Form;
