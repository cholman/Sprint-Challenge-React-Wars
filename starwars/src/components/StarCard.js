import React from "react";
import styled from 'styled-components';

const StarCard = props => {
    const CardContainer = styled.div`
    display: flex;
    max-width: auto;
    background: gray;
    border-radius: 5%;
    `;
    return (
        <CardContainer className="star-card">
            <h2>{props.name}</h2>
            <h3>height: {props.height}</h3>
        </CardContainer>
    )
}
export default StarCard;