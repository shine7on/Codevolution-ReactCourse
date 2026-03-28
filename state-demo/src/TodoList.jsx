import { useState } from "react"

export const TodoList = () => {
    const [items, setItems]= useState([
        {id: 1, text: "Learn React", done: true},
        {id: 2, text: "Build an App", done: false},
    ]);

    const addItem = () => {
        const newItem = {
            id: Date.now(),
            text: "Deploy to production",
            done: false,
        };
        setItems([...items, newItem]);
    };

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id != id));
    };

    const toggleItem = (id) => {
        setItems(items.map((item) => {
            if (item.id == id) {
                return {...item, done: !item.done}
            }
            return item
        }));
    };


    return (
    <div>
        <ul>
            {items.map((item) => {
                return <li key={item.id}>
                    <span style={{textDecoration: item.done ? 'line-through':'none'}}>{item.text}</span>
                    <button onClick={() => toggleItem(item.id)}>{item.done ? 'Undo' : 'Done'}</button>
                    <button onClick={() => deleteItem(item.id)}>Delete</button>
                </li>
            })}
        </ul>
        <button onClick={addItem}>Add an Item</button>
    </div>
    );
};