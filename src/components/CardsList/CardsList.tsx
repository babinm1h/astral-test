import React, { FC } from "react";
import { ICard } from "../../types/entities";
import Card from "./Card/Card";
import CardSkeleton from "./CardSkeleton/CardSkeleton";
import st from "./CardsList.module.scss";

interface IProps {
  cards: ICard[];
  isLoading: boolean;
}

const CardsList: FC<IProps> = ({ cards, isLoading }) => {
  return (
    <div className={st.wrapper}>
      {isLoading
        ? Array(10)
            .fill("")
            .map((_, idx) => <CardSkeleton key={idx} />)
        : cards.map((card) => <Card card={card} key={card.id} />)}
    </div>
  );
};

export default CardsList;
