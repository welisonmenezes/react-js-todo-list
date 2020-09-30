import React from "react";
import "./Filter.css";

function Filter() {
    return (
        <div className="filter">
            <input type="text" placeholder="Search Todo..." />
            <ul>
                <li className="active" tabIndex="0" data-status="all">
                    All
                </li>
                <li tabIndex="0" data-status="active">
                    Active
                </li>
                <li tabIndex="0" data-status="completed">
                    Completed
                </li>
            </ul>
        </div>
    );
}

export default Filter;
