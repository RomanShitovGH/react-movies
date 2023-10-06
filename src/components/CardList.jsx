import React from "react";
import Card from "./Card";

export default function CardList(props) {    
    const { cardList = [] } = props;
    
    return <div className="cardList">
        {   
            cardList.length ? 
                props.cardList.map(card => (
                    <Card key={card.imdbID} poster={card.Poster} title={card.Title} year={card.Year} type={card.Type}/>
                )) : (
                    <h4>Не удалось найти</h4>
                )
        }    
    </div>
}