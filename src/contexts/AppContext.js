import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [todoItems, setTodoItems] = useState([
        {
            id: "_1",
            title: "Todo Item 1",
            completed: false,
        },
        {
            id: "_2",
            title: "Todo Item 2",
            completed: true,
        },
        {
            id: "_3",
            title: "Todo Item 3",
            completed: false,
        },
    ]);
    const [todoItemsFiltered, setTodoItemsFiltered] = useState(todoItems);
    const [filterStatus, setFilterStatus] = useState("");
    const [filterQuery, setFilterQuery] = useState("");
    const [key, setKey] = useState("all");
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(true);

    useEffect(() => {
        let newItems = todoItems.filter((item) => {
            if (key === "active") return !item.completed;
            if (key === "completed") return item.completed;
            return true;
        });

        if (query !== "") {
            newItems = newItems.filter((item) => {
                return item.title.toLowerCase().includes(query);
            });
        }

        setTodoItemsFiltered(newItems);
    }, [key, setTodoItemsFiltered, todoItems, query]);

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
                key,
                setKey,
                query,
                setQuery,
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
