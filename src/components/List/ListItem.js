import React, { useContext, useEffect } from "react";
import "./ListItem.css";
import { AppContext } from "../../contexts/AppContext";

function ListItem({ todoItem }) {
    const { todoItems } = useContext(AppContext);
    const { setTodoItems } = useContext(AppContext);

    function handleCheckItem(todoItem) {
        const newTodoItems = [...todoItems];
        newTodoItems.map((item) => {
            if (item.id === todoItem.id) {
                item.completed = !todoItem.completed;
            }
            return item;
        });
        setTodoItems(newTodoItems);
    }

    function handleInputChange(event, todoItem) {
        const newTodoItems = [...todoItems];
        newTodoItems.map((item) => {
            if (item.id === todoItem.id) {
                item.title = event.currentTarget.value;
            }
            return item;
        });
        setTodoItems(newTodoItems);
    }

    function handleInputBlur(event) {
        if (!event.currentTarget.hasAttribute('readOnly')){
            const newTodoItems = todoItems.filter((item) => {
                event.currentTarget.setAttribute("readOnly", 1);
                if (item.title !== "") {
                    return true;
                } else {
                    removeFromUIWithAnimations(event.currentTarget.parentElement);
                    setTimeout(() => {
                        setTodoItems(newTodoItems);
                    }, 500);
                    return false;
                }
            });
        }
    }

    function handleEnableEditItem(event) {
        const inp = event.currentTarget.parentElement.querySelector("input");
        inp.removeAttribute("readOnly");
        inp.focus();
    }

    function handleDeleteItem(event, todoItem) {
        const newTodoItems = todoItems.filter((item) => {
            return item.id !== todoItem.id;
        });
        removeFromUIWithAnimations(event.currentTarget.parentElement);
        setTimeout(() => {
            setTodoItems(newTodoItems);
        }, 500);
    }

    function removeFromUIWithAnimations($li) {
        $li.classList.remove("static");
        $li.classList.add("animate-out");
    }

    useEffect(() => {
        document.querySelector("#" + todoItem.id).classList.add("static");
    }, [todoItems, todoItem]);

    return (
        <li
            id={todoItem.id}
            className={`list-item ${todoItem.completed ? "completed" : ""}`}
        >
            <span
                className="checkmark"
                tabIndex="0"
                onClick={() => {
                    handleCheckItem(todoItem);
                }}
            ></span>
            <input
                type="text"
                readOnly="1"
                tabIndex="-1"
                value={todoItem.title}
                onChange={(event) => {
                    handleInputChange(event, todoItem);
                }}
                onBlur={handleInputBlur}
            />
            <button
                type="button"
                className="btn-edit"
                onClick={handleEnableEditItem}
            >
                <i className="material-icons">edit</i>
            </button>
            <button
                type="button"
                className="btn-delete"
                onClick={(event) => {
                    handleDeleteItem(event, todoItem);
                }}
            >
                <i className="material-icons">delete</i>
            </button>
        </li>
    );
}

export default ListItem;
