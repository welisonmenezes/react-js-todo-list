import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [todoItems, setTodoItems] = useState([]);
    const [todoItemsFiltered, setTodoItemsFiltered] = useState(todoItems);
    const [filterStatus, setFilterStatus] = useState("");
    const [filterQuery, setFilterQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(true);

    useEffect(() => {
        if (localStorage["todoItems"]) {
            setTodoItems(JSON.parse(localStorage["todoItems"]));
        }

        if (localStorage["filterStatus"]) {
            setFilterStatus(localStorage["filterStatus"]);
        }
    }, []);

    useEffect(() => {
        let newItems = todoItems.filter((item) => {
            if (filterStatus === "active") return !item.completed;
            if (filterStatus === "completed") return item.completed;
            return true;
        });

        if (filterQuery !== "") {
            newItems = newItems.filter((item) => {
                return item.title.toLowerCase().includes(filterQuery);
            });
        }

        setTodoItemsFiltered(newItems);
    }, [filterStatus, setTodoItemsFiltered, todoItems, filterQuery]);

    useEffect(() => {
        localStorage["todoItems"] = JSON.stringify(todoItems);
    }, [todoItems]);

    useEffect(() => {
        localStorage["filterStatus"] = filterStatus;
    }, [filterStatus]);

    return (
        <AppContext.Provider
            value={{
                todoItems,
                setTodoItems,
                todoItemsFiltered,
                setTodoItemsFiltered,
                filterStatus,
                setFilterStatus,
                filterQuery,
                setFilterQuery,
                isLoading,
                setIsLoading,
                isAdding,
                setIsAdding,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
