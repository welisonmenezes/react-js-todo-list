import React from "react";
import "./List.css";
import ListItem from "./ListItem";

function List() {
    return (
        <div className="list">
            <ul id="todo-items">
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </ul>
        </div>
    );
}

export default List;
