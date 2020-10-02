import React, { useContext, useState, useEffect } from "react";
import "./Create.css";
import { AppContext } from "../contexts/AppContext";

function Create() {
    const [item, setItem] = useState("");
    const [id, setId] = useState("");
    const { todoItems } = useContext(AppContext);
    const { setTodoItems } = useContext(AppContext);
    const { setIsAdding } = useContext(AppContext);

    function handleInputChange(event) {
        if (event.keyCode !== 13) {
            setItem(event.currentTarget.value);
        }
    }

    function handleInputKeyDown(event) {
        if (event.keyCode === 13) {
            addNewItem();
        }
    }

    function handleAddNewItem() {
        addNewItem();
    }

    function addNewItem() {
        if (item.trim() !== "") {
            const theID = uniqueID();
            const newItem = {
                id: theID,
                title: item,
                completed: false,
                test: true,
            };
            const newTodoItems = [...todoItems];
            newTodoItems.unshift(newItem);
            setTodoItems(newTodoItems);
            setId(theID);
            setIsAdding(true);
        }
    }

    function uniqueID() {
        return "_" + Math.random().toString(36).substr(2, 9);
    }

    useEffect(() => {
        // if (id.trim() !== "") {
        //     setTimeout(() => {
        //         const $li = document.querySelector("#" + id);
        //         if ($li) {
        //             $li.classList.add("not-static");
        //             $li.classList.add("animate-in");
        //         }
        //         setItem("");
        //         document.querySelector(".create input").focus();
        //     }, 10);
        // }
        setItem("");
        document.querySelector(".create input").focus();
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
                    onKeyDown={handleInputKeyDown}
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
