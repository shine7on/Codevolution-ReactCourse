export const UserInfo = ({name, age, city, email}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <p>Email: {email}</p>
        </div>
    );
};