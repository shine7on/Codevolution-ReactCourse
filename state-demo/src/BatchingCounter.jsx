import { useState } from "react"

export const BatchingCounter = () => {
    
    const [count,setCount] = useState(0);
    const [name, setName] = useState('');
    const [isActive,setIsActive] = useState(false);
    console.log('Render Phase: Component rendering with count = ', count)

    const handleClick = () => {
        setCount((prev) => {
            console.log(`First: (prev) => prev+1: count is `, prev);
            return prev+1
        });
        
        setCount((prev) => {
            console.log(`Second: (prev) => prev+5: count is `, prev);
            return prev+5
        });
        
        setCount((prev) => {
            console.log(`Their: (prev) => prev+10: count is `, prev);
            return prev+10
        });

        setName('Updated');
        setIsActive(true);
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <p>Name: {name}</p>
            <p>Active: {isActive ? 'Yes':'No'}</p>
            <button onClick={handleClick}>Update all three</button>
        </div>
    )
}