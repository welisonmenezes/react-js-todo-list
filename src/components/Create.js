import React from "react";
import "./Create.css";

function Create() {
    function handleInputChange(event) {
        console.log("Create Change Item", event);
    }

    function handleAddNewItem(event) {
        console.log("Create Add New", event);
    }

    return (
        <div className="create">
            <div>
                <input
                    type="text"
                    placeholder="New Todo..."
                    id="newItem"
                    onChange={handleInputChange}
                />
                <button
                    type="button"
                    className="btn-add"
                    id="handleNewItem"
                    onClick={handleAddNewItem}
                >
                    <i className="material-icons">add</i>
                </button>
            </div>
        </div>
    );
}

export default Create;
