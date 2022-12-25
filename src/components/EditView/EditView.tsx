import { Typography } from "@mui/material";
import { FC } from "react";
import { IUser } from "../../types/entities";

import st from "./EditView.module.scss";
import EditViewForm from "./EditViewForm/EditViewForm";

interface IProps {
  user: IUser | null;
}

const EditView: FC<IProps> = ({ user }) => {
  return (
    <div className={st.container}>
      <div className={st.block}>
        <Typography component="h1" variant="h5">
          Редактирование профиля
        </Typography>
        {user && <EditViewForm user={user} />}
      </div>
    </div>
  );
};

export default EditView;
