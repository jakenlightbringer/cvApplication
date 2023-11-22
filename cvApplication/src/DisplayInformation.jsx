import React from "react";

const DisplayInformation = ({name, email}) =>{
    return (
        <div>
            <h2>General Information</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default DisplayInformation