import React, { useContext, useState, useEffect } from "react";
import "./Status.css";
import { AppContext } from "../contexts/AppContext";

function Status() {
    const [status, setStatus] = useState("0 of 0");
    const [percentage, setPercentage] = useState(0);
    const { todoItems } = useContext(AppContext);

    useEffect(() => {
        const completed = todoItems.filter((item) => item.completed);
        const countAll = todoItems.length;
        const countCompleted = completed.length;
        setPercentage(100 / (countAll / countCompleted));
        setStatus(`${completed.length} of ${todoItems.length}`);
    }, [todoItems]);

    return (
        <div className="status">
            <span>{status}</span>
            <div>
                <div
                    className="status-bar"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}

export default Status;
