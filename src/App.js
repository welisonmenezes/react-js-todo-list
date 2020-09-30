import React from "react";
import "./App.css";
import Forkme from "./components/Forkme";
import Header from "./components/Header";
import Create from "./components/Create";
import Status from "./components/Status";
import List from "./components/List/List";
import Empty from "./components/Empty";
import Filter from "./components/Filter";

function App() {
    return (
        <div className="root">
            <Forkme />
            <div className="todo-app">
                <Header />
                <Create />
                <Status />
                <List />
                <Empty />
                <Filter />
            </div>
        </div>
    );
}

export default App;
