//the backbone of all the code the start of the page rendering
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { LevelUp } from "./components/LevelUp.js"
//LevelUp.js in the next step in the order of how the page is rendered
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <LevelUp />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
