import React, { useState } from "react";
import "./ListItem.css";

function ListItem() {
    const [title] = useState("Todo Item");

    function handleInputChange(event) {
        console.log(event);
    }

    return (
        <li className="animate-in list-item">
            <span className="checkmark" tabIndex="0"></span>
            <input
                type="text"
                readOnly=""
                tabIndex="-1"
                value={title}
                onChange={handleInputChange}
            />
            <button type="button" className="btn-edit">
                <i className="material-icons">edit</i>
            </button>
            <button type="button" className="btn-delete">
                <i className="material-icons">delete</i>
            </button>
        </li>
    );
}

export default ListItem;
