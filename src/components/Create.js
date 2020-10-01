import React, { useContext, useState, useEffect } from "react";
import "./Create.css";
import { AppContext } from "../contexts/AppContext";

function Create() {
    const [item, setItem] = useState("");
    const [id, setId] = useState("");
    const { todoItems } = useContext(AppContext);
    const { setTodoItems } = useContext(AppContext);

    function handleInputChange(event) {
        setItem(event.currentTarget.value);
    }

    function handleAddNewItem(event) {
        if (item.trim() !== "") {
            const theID = uniqueID();
            const newItem = {
                id: theID,
                title: item,
                completed: false,
            };
            const newTodoItems = [...todoItems];
            newTodoItems.unshift(newItem);
            setTodoItems(newTodoItems);
            setId(theID);
        }
    }

    function uniqueID() {
        return "_" + Math.random().toString(36).substr(2, 9);
    }

    useEffect(() => {
        if (id.trim() !== "") {
            const $li = document.querySelector("#" + id);
            if ($li) {
                setTimeout(() => {
                    $li.classList.remove("filtered");
                }, 1);
                $li.classList.add("animate-in");
                setItem("");
                document.querySelector(".create input").focus();
            }
        }
    }, [id]);

    return (
        <div className="create">
            <div>
                <input
                    type="text"
                    placeholder="New Todo..."
                    id="newItem"
                    value={item}
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
