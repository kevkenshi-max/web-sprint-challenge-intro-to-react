import React from 'react';
import Character from './Character';
import styled from 'styled-components';

const StyledCharacters = styled.div`
    display: flex;
    flex-diretion: column;
    align-items: center;

`

const Characters = (props) => {
    return (
        <StyledCharacters>
            { props.characters.map(character => (
                <Character character={character} key={character.login.uuid} />
            )) }
        </StyledCharacters>
    )
}

export default Characters;