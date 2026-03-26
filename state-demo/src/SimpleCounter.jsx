import { useState } from "react"

export const SimpleCounter = () => {
    
    const [count,setCount] = useState(0);
    console.log('Render Phase: Component rendering with count = ', count)

    const handleClick = () => {
        console.log(`Before setCount: count is `, count);
        setCount(count+1);
        console.log(`Still Trigger Phase: After setCount: count is `, count);
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}