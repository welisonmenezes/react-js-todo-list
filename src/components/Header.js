import React from "react";
import "./Header.css";
import logo from "./../assets/logo.png";

function Header() {
    return (
        <div className="header">
            <img src={ logo } alt="Logo" />
            <h1>React Js <span>Todo List</span></h1>
        </div>
    );
}

export default Header;
