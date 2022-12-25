import React, { useEffect } from "react";
import CardsList from "../../components/CardsList/CardsList";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchCards } from "../../redux/thunks/cardsThunks";

const CardsPage = () => {
  const { cards, isLoading } = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  return <CardsList cards={cards} isLoading={isLoading} />;
};

export default CardsPage;
