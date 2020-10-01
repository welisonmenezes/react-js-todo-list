import React, { useContext } from "react";
import "./Root.css";
import { AppContext } from "../contexts/AppContext";
import Forkme from "./Forkme";
import Header from "./Header";
import Create from "./Create";
import Status from "./Status";
import List from "./List/List";
import Empty from "./Empty";
import Filter from "./Filter";

function Root() {
    const { todoItems } = useContext(AppContext);

    return (
        <div className="root">
            <Forkme />
            <div className="todo-app">
                <Header />
                <Create />
                {todoItems.length > 0 && <Status />}
                {todoItems.length > 0 && <List />}
                {todoItems.length <= 0 && <Empty />}
                {todoItems.length > 0 && <Filter />}
            </div>
        </div>
    );
}

export default Root;
