import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Form from "./Form";
import Header from "./Header";
import Home from "./Home";

function App() {
    const [authenticated, setAuthenticated] = useState(false);

    return (
        <>
            <Header />
            {authenticated ? <Redirect to="/" /> : <Redirect to="/login" />}
            <Switch>
                <Route path="/login">
                    <Form setAuthenticated={setAuthenticated} />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </>
    );
}

export default App;
