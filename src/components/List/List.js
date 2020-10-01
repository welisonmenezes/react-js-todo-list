import React, { useContext, useEffect } from "react";
import "./List.css";
import { AppContext } from "../../contexts/AppContext";
import ListItem from "./ListItem";

function List() {
    const { todoItems } = useContext(AppContext);

    useEffect(() => {
        const $lis = document.querySelectorAll(".list li");
        $lis.forEach(($item, index) => {
            $item.classList.remove("static");
            setTimeout(() => $item.classList.add("animate-in"), index * 100);
        });
    }, []);

    return (
        <div className="list">
            <ul id="todo-items">
                {todoItems.map((todoItem) => {
                    return <ListItem key={todoItem.id} todoItem={todoItem} />;
                })}
            </ul>
        </div>
    );
}

export default List;
