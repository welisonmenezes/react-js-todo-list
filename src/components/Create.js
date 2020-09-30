import React from "react";
import "./Create.css";

function Create() {
    return (
        <div className="create">
            <div>
                <input type="text" placeholder="New Todo..." id="newItem" />
                <button type="button" className="btn-add" id="handleNewItem">
                    <i className="material-icons">add</i>
                </button>
            </div>
        </div>
    );
}

export default Create;
