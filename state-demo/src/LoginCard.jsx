import { useState } from "react";

export const LoginCard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState('');

    const handleLogIn = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    return (
        <>
            <button onClick={handleLogIn}>{ isLoggedIn ? 'Logout' : 'Login'}</button>
            <div>
                <input 
                    type="text" 
                    placeholder="Text a message" 
                    value={message} 
                    onChange={handleChange}>    
                </input>
                <p>{message}</p>
            </div>
        </>
    );
};