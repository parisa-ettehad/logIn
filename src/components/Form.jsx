import React from "react";


function Form(props) {
    return (
        <form className="form">
            <input
            type="text"
            placeholder="Username"
            />
            <input
            type="Password"
            placeholder="Password"
            />
            {props.isRegistered === false && (
                <input
                type="Password"
                placeholder="Confirm Password"
                />
            )}
            <button type="submit">
            {props.isRegistered ? "Login" : "Register"}
            </button>
        </form>
        
    );
}

export default Form;