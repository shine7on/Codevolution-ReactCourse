export const StyleForm = () => {
    return (
        <form className="contact-form">
            <label htmlFor='username'>Username:</label>
            <input type='text' id="username" className="form-input"></input>
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' className="form-input"></input>
        </form>
    )
}