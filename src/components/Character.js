// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    border: black 3px solid;
    margin: 2%;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        color: gray;
    }
`

const Character = (props) => {
    return (
        <StyledCharacter>
            <h3>{props.character.name}</h3>
            <p>{props.character.gender}</p>
            <p>{props.character.height}</p>
            <p>{props.character.mass}</p>
            <p>{props.character.birth_year}</p>
            <p>{props.character.eye_color}</p>
            <p>{props.character.hair_color}</p>
            <p>{props.character.skin_color}</p>
        </StyledCharacter>
    )
}

export default Character;