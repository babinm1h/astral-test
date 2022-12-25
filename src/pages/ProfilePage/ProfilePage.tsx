import React from "react";
import EditView from "../../components/EditView/EditView";
import { useAppSelector } from "../../hooks/reduxHooks";

const ProfilePage = () => {
  const authUser = useAppSelector((state) => state.auth.user);

  return <EditView user={authUser} />;
};

export default ProfilePage;
