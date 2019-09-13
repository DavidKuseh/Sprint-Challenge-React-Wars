import React from "react";
import styled from "styled-components";

//styles
const CharacterStyle = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    .character{

    }
`

function Characters ({props}) {
    return (
        <CharacterStyle className="character">
            <h3>Character: {props.name}</h3>
            <p>Height: {props.height}cm</p>
            <p>Mass: {props.mass}Kg</p>
            <p>Birth Year: {props.birth_year}</p>
        </CharacterStyle>
    )
}

export default Characters;