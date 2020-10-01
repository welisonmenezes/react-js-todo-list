import React, { useContext } from "react";
import "./List.css";
import { AppContext } from "../../contexts/AppContext";
import ListItem from "./ListItem";

function List() {
    const {todoItems} = useContext(AppContext);

    return (
        <div className="list">
            <ul id="todo-items">
                { todoItems.map(todoItem => {
                    return <ListItem key={todoItem.id} todoItem={todoItem} />
                }) }
            </ul>
        </div>
    );
}

export default List;
