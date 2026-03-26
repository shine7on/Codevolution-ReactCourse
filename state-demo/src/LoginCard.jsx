import { useState } from "react";

export const LoginCard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogIn = () => {
        setIsLoggedIn(!isLoggedIn)
    };

    return (
        <button onClick={handleLogIn}>{ isLoggedIn ? 'Logout' : 'Login'}</button>
    );
};