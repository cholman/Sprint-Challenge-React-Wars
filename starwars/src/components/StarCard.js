import React from "react";
import styled from 'styled-components';

const StarCard = props => {
    const Card = styled.div`
    min-width: 200px;
    max-width: 250px;
    background: rgba(20, 20, 20, .5);
    border-radius: 10px;
    margin: 5%;
    padding: 1%;
    `;
    return (
        <Card className="star-card">
            <h2>{props.name}</h2>
            <h3>height: {props.height}</h3>
            <h3>weight: {props.weight}</h3>
            <h3>gender: {props.gender}</h3>
        </Card>
    )
}
export default StarCard;