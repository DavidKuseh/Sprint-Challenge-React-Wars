import React from "react";


function Characters ({props}) {
    return (
        <div>
            <h3>Character: {props.name}</h3>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Birth Year: {props.birth_year}</p>
        </div>
    )
}

export default Characters;