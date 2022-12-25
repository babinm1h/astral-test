import React, { useMemo } from "react";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import { NavLink } from "react-router-dom";

import st from "./Main.module.scss";
import { APP_ROUTES } from "../AppRoutes/AppRoutes";

const Main = () => {
  const navCards = useMemo(() => {
    return [
      { content: "Изучение английского", to: APP_ROUTES.CARDS },
      { content: "Мой профиль", to: APP_ROUTES.PROFILE },
    ];
  }, []);

  return (
    <div className={st.wrapper}>
      <h1>Главная страница приложения</h1>
      <div className={st.cards}>
        {navCards.map((card, idx) => (
          <Card className={st.card} key={idx}>
            <CardContent>
              <p>{card.content}</p>
            </CardContent>
            <CardActions>
              <NavLink to={card.to}>
                <Button>Перейти</Button>
              </NavLink>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Main;
