import { useState } from "react";

export const Counter = () => {

    const [count, setCount] = useState(0);
    // current value, setterFunction = userState(initial_value)

    const handleClick = () => {
        setCount(count + 1);
        console.log(count);
    };

    return (
        <div>
            <button onClick={handleClick}>
                Counter: {count}
            </button>
        </div>
    );
}