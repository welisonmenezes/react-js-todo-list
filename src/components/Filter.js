import React, { useContext } from "react";
import "./Filter.css";
import { AppContext } from "../contexts/AppContext";

function Filter() {
    const { filterStatus, setFilterStatus } = useContext(AppContext);
    const { filterQuery, setFilterQuery } = useContext(AppContext);
    const { setIsAdding } = useContext(AppContext);

    function handleFilterChange(event) {
        setFilterStatus(event.currentTarget.getAttribute("data-status"));
        setIsAdding(false);
    }

    function handleFilterByEnter(event) {
        if (event.keyCode === 13) {
            setFilterStatus(event.currentTarget.getAttribute("data-status"));
            setIsAdding(false);
        }
    }

    function handleInputChange(event) {
        setFilterQuery(event.currentTarget.value);
        setIsAdding(false);
    }

    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Search Todo..."
                value={filterQuery}
                onChange={handleInputChange}
            />
            <ul>
                <li
                    className={`${filterStatus === "all" ? "active" : ""}`}
                    tabIndex="0"
                    data-status="all"
                    onClick={handleFilterChange}
                    onKeyDown={(event) => {
                        handleFilterByEnter(event);
                    }}
                >
                    All
                </li>
                <li
                    className={`${filterStatus === "active" ? "active" : ""}`}
                    tabIndex="0"
                    data-status="active"
                    onClick={handleFilterChange}
                    onKeyDown={(event) => {
                        handleFilterByEnter(event);
                    }}
                >
                    Active
                </li>
                <li
                    className={`${filterStatus === "completed" ? "active" : ""}`}
                    tabIndex="0"
                    data-status="completed"
                    onClick={handleFilterChange}
                    onKeyDown={(event) => {
                        handleFilterByEnter(event);
                    }}
                >
                    Completed
                </li>
            </ul>
        </div>
    );
}

export default Filter;
