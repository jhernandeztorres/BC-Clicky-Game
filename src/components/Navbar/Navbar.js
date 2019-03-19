import React from "react";

const Navbar = (props) => (
    <nav className="navbar navbar-dark bg-info">
        <span className="navbar-brand mb-0 h1">React Clicky Game</span>
        <span className="text-center mb-0 h3">{props.message}</span>
        <span className="navbar-text text-dark font-weight-bold"> 
            Score: <span> {props.correct} </span> |
            High Score: <span> {props.highscore}</span>
        </span>
    </nav>
)

export default Navbar;