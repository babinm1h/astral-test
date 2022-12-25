import React, { FC, useMemo, useState } from "react";
import { ICard } from "../../../types/entities";
import { Button } from "@mui/material";
import { CSSTransition } from "react-transition-group";

import st from "./Card.module.scss";
import { getRandomArrayElem } from "../../../utils/getRandomArrayElem";
import { cardTitles } from "../../../utils/mockedData";

interface IProps {
  card: ICard;
}

const Card: FC<IProps> = ({ card }) => {
  const [showFront, setShowFront] = useState(true);

  const randomTitle = useMemo(() => {
    return getRandomArrayElem<string>(cardTitles);
  }, []);

  const flipClassnames = {
    exit: st.flipExit,
    exitActive: st.flipExitActive,
    exitDone: st.flipExitDone,
    enter: st.flipEnter,
    enterActive: st.flipEnterActive,
    enterDone: st.flipEnterDone,
  };

  return (
    <CSSTransition in={showFront} timeout={300} classNames={flipClassnames}>
      <div className={st.card}>
        {showFront && (
          <div className={st.front}>
            <div className={st.content}>
              <div className={st.title}>{randomTitle}</div>
              <div className={st.word}>{card.word}</div>
              <div className={st.part}>{card.partOfSpeech}</div>
              <p className={st.example}>{card.example}</p>
            </div>
            <div className={st.footer}>
              <Button onClick={() => setShowFront(false)}>Show Translate</Button>
            </div>
          </div>
        )}
        <div className={st.back}>
          <div className={st.content}>
            <div className={st.translate}>{card.translate}</div>
          </div>
          <div className={st.footer}>
            <Button onClick={() => setShowFront(true)}>Show Card</Button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Card;
