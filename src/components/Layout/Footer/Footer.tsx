import React, { FC } from "react";
import st from "./Footer.module.scss";

interface IProps {
  name: string;
  link: string;
}

const Footer: FC<IProps> = ({ link, name }) => {
  return (
    <div className={st.container}>
      <a href={link} rel="noreferrer" target={"_blank"} className={st.link}>
        Contact me - {name}
      </a>
    </div>
  );
};

export default Footer;
