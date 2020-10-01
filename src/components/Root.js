import React, { useContext, useEffect } from "react";
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

    useEffect(() => {
        addEventsToAccessibility();
    });

    function addEventsToAccessibility() {
        document.querySelector('body').addEventListener('click', function(event) {
            removeActiveClassFromItemUI(event);
        });
        document.querySelector('body').addEventListener('keyup', function(event) {
            if (event.key === 'Tab') {
                removeActiveClassFromItemUI(event);
            }
        });
    }

    function removeActiveClassFromItemUI(event) {
        if (event.target.parentElement) {
            if(event.target.parentElement.classList.contains('list-item')) return;
            if (event.target.parentElement.parentElement) {
                if(event.target.parentElement.parentElement.classList.contains('list-item')) return;
            }
        }
        if (document.querySelector('.list li.active')) {
            document.querySelectorAll('.list li').forEach(item => {
                item.classList.remove('active');
            });
        }
    }

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
