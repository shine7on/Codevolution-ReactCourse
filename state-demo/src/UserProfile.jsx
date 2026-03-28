import { useState } from "react";

export const UserProfile = () => {

    const [user, setUser] = useState({
        name: 'Bruce Wayce',
        age: 30,
        email: 'bruce@gmail.com',
    });

    const updateName = () => {
        setUser({
            ...user,
            name: 'Clark Kent'
        })
    }

    return (
        <div>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email:{user.email}</p>
            <button onClick={updateName}>Chnage name to Clark Kent</button>
        </div>
    );
};