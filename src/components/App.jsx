import React, { useState } from 'react';
import Login from "./Login";
import Signup from "./Signup";
import "../App.css";

export default

    function App() {
    const [view, setView] = useState("Login");
    return (
        <div className="App container">
            <nav>
                <div className={view === "Login" ? 'nav-selected' : ""} >
                    <h3 onClick={() => setView("Login")} style={{ color: view === "Login" ? "navy" : "" }}>
                        Login
                    </h3></div>
                <div className={view === "Signup" ? 'nav-selected' : ""}>
                    <h3 onClick={() => setView("Signup")} style={{ color: view === "Signup" ? "navy" : "" }} >
                        Signup
                    </h3></div>
            </nav>
            <div>{view === "Login" ? <Login /> : <Signup />}</div>
        </div>
    );
}
