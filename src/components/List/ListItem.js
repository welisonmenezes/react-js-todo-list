import React, { useState } from "react";
import "./ListItem.css";

function ListItem() {
    const [title] = useState("Todo Item");

    function handleInputChange(event) {
        console.log("ListItem Change Item", event);
    }

    function handleEditItem(event) {
        console.log("ListItem Edit Item", event);
    }

    function handleDeleteItem(event) {
        console.log("ListItem Delete Item", event);
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
            <button type="button" className="btn-edit" onClick={handleEditItem}>
                <i className="material-icons">edit</i>
            </button>
            <button
                type="button"
                className="btn-delete"
                onClick={handleDeleteItem}
            >
                <i className="material-icons">delete</i>
            </button>
        </li>
    );
}

export default ListItem;
