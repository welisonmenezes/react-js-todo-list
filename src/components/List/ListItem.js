import React, { useContext, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./ListItem.css";
import { AppContext } from "../../contexts/AppContext";

function ListItem({ todoItem }) {
    const { todoItems } = useContext(AppContext);
    const { setTodoItems } = useContext(AppContext);
    const { isAdding, setIsAdding } = useContext(AppContext);
    const { isLoading } = useContext(AppContext);
    const animation = useSpring({
        from: {
            opacity: isAdding && !isLoading ? 0 : 1,
            transform: isAdding && !isLoading ? "translate(-100px, 0)" : "translate(0, 0)",
        },
        to: { opacity: 1, transform: "translate(0, 0)" },
    });

    function handleCheckItem(todoItem) {
        checkTheTodoItem(todoItem);
    }

    function handleCheckItemByEnter(event, todoItem) {
        if (event.keyCode === 13) {
            checkTheTodoItem(todoItem);
        }
    }

    function checkTheTodoItem(todoItem) {
        const newTodoItems = [...todoItems];
        newTodoItems.map((item) => {
            if (item.id === todoItem.id) {
                item.completed = !todoItem.completed;
            }
            return item;
        });
        setTodoItems(newTodoItems);
    }

    function handleCheckFocus(event) {
        document.querySelectorAll(".list li").forEach((item) => {
            item.classList.remove("active");
        });
        const parent = event.currentTarget.parentElement;
        setTimeout(() => {
            parent.classList.add("active");
        }, 100);
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
        if (!event.currentTarget.hasAttribute("readOnly")) {
            const newTodoItems = todoItems.filter((item) => {
                event.currentTarget.setAttribute("readOnly", 1);
                if (item.title !== "") {
                    return true;
                } else {
                    removeFromUIWithAnimations(
                        event.currentTarget.parentElement
                    );
                    // delay to animation
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
        // delay to animation
        setTimeout(() => {
            setTodoItems(newTodoItems);
        }, 500);
    }

    function removeFromUIWithAnimations($li) {
        $li.classList.add("not-static");
        $li.classList.add("animate-out");
    }

    useEffect(() => {
        setIsAdding(false);
    }, [setIsAdding]);

    return (
        <animated.li
            style={animation}
            id={todoItem.id}
            className={`list-item ${todoItem.completed ? "completed" : ""}`}
        >
            <span
                className="checkmark"
                tabIndex="0"
                onClick={() => {
                    handleCheckItem(todoItem);
                }}
                onKeyDown={(event) => {
                    handleCheckItemByEnter(event, todoItem);
                }}
                onFocus={handleCheckFocus}
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
        </animated.li>
    );
}

export default ListItem;
