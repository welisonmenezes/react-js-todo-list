import React from "react";
import "./Filter.css";

function Filter() {
    function handleFilterChange(event) {
        console.log("Filter Status", event);
    }

    function handleInputChange(event) {
        console.log("Filter Query", event);
    }

    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Search Todo..."
                onChange={handleInputChange}
            />
            <ul>
                <li
                    className="active"
                    tabIndex="0"
                    data-status="all"
                    onClick={handleFilterChange}
                >
                    All
                </li>
                <li
                    tabIndex="0"
                    data-status="active"
                    onClick={handleFilterChange}
                >
                    Active
                </li>
                <li
                    tabIndex="0"
                    data-status="completed"
                    onClick={handleFilterChange}
                >
                    Completed
                </li>
            </ul>
        </div>
    );
}

export default Filter;
