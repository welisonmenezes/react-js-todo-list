import React from "react";
import "./Empty.css";

function Empty() {
    return (
        <div className="empty">
            <p>
                <i className="material-icons">not_interested</i>
                No item found.
            </p>
        </div>
    );
}

export default Empty;
