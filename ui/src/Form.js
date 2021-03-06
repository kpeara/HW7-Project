import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

Form.propTypes = {
    setAuthenticated: PropTypes.func,
};

function Form({ setAuthenticated }) {
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

            if (response.ok) setAuthenticated(true);
            else toast.error("Invalid Login.");
        } catch (err) {
            console.log("errr");
            console.log(err);
        }
    };

    return (
        <div className="container mt-4">
            <form onSubmit={handleForm}>
                <div className="column is-one-quarter">
                    <label className="label">
                        Username:
                        <input
                            className="input"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>

                    <label className="label mt-4">
                        Password:
                        <input
                            className="input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>

                    <input
                        className="button is-info mt-4"
                        type="submit"
                        value="Login"
                    />
                </div>
            </form>
        </div>
    );
}

export default Form;
