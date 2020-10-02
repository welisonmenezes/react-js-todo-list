import React, { useContext } from "react";
import "./Filter.css";
import { AppContext } from "../contexts/AppContext";

function Filter() {
    const { key, setKey } = useContext(AppContext);
    const { query, setQuery } = useContext(AppContext);
    const { setIsAdding } = useContext(AppContext);

    function handleFilterChange(event) {
        setKey(event.currentTarget.getAttribute("data-status"));
        setIsAdding(false);
    }

    function handleInputChange(event) {
        setQuery(event.currentTarget.value);
        setIsAdding(false);
    }

    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Search Todo..."
                value={query}
                onChange={handleInputChange}
            />
            <ul>
                <li
                    className={`${key === "all" ? "active" : ""}`}
                    tabIndex="0"
                    data-status="all"
                    onClick={handleFilterChange}
                >
                    All
                </li>
                <li
                    className={`${key === "active" ? "active" : ""}`}
                    tabIndex="0"
                    data-status="active"
                    onClick={handleFilterChange}
                >
                    Active
                </li>
                <li
                    className={`${key === "completed" ? "active" : ""}`}
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
