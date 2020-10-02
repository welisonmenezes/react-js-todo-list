import React, { useContext, useEffect } from "react";
import "./List.css";
import { AppContext } from "../../contexts/AppContext";
import ListItem from "./ListItem";
import { useTrail, animated } from "react-spring";

function List() {
    const { todoItemsFiltered } = useContext(AppContext);
    const { isLoading, setIsLoading } = useContext(AppContext);
    const trailSprings = useTrail(todoItemsFiltered.length, {
        from: {
            opacity: isLoading ? 0 : 1,
            transform: isLoading ? "translate(-100px, 0)" : "translate(0, 0)",
        },
        to: { opacity: 1, transform: "translate(0, 0)" },
    });

    useEffect(() => {
        setIsLoading(false);
    }, [setIsLoading]);

    return (
        <div className="list">
            <ul id="todo-items">
                {trailSprings.map((spring, index) => (
                    <animated.div
                        key={todoItemsFiltered[index].id}
                        style={spring}
                    >
                        <ListItem todoItem={todoItemsFiltered[index]} />
                    </animated.div>
                ))}
            </ul>
        </div>
    );
}

export default List;
