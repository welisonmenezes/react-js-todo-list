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
    const [filterStatus, setFilterStatus] = useState("");
    const [filterQuery, setFilterQuery] = useState("");

    useEffect(() => {
        console.log(todoItems)
    }, [todoItems]);

    return (
        <AppContext.Provider
            value={{
                todoItems,
                setTodoItems,
                filterStatus,
                setFilterStatus,
                filterQuery,
                setFilterQuery,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
