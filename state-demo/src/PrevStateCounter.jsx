import { useState } from "react"

export const PrevStateCounter = () => {
    
    const [count,setCount] = useState(0);
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
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}