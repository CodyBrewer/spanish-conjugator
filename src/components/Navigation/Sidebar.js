import React, { useContext, useState } from "react";
import {
  UsernameContext,
  ModalContext,
  PasswordContext
} from "../../Context/Store";
import { SidebarStyled, MyLink } from "./Styled";

const Sidebar = props => {
  const [username, setUsername] = useContext(UsernameContext);
  const [setModal] = useContext(ModalContext);
  const [setPassword] = useContext(PasswordContext);

  const logOut = () => {
    localStorage.removeItem("jwt");
    setModal(false);
    setUsername("");
    setPassword("");
  };

  return (
    <SidebarStyled>
      <h2> Hi {username} </h2>
      <MyLink to="/">Home</MyLink>
      <MyLink to="/learn">Go Learn</MyLink>
      <MyLink to="/my-account">My Account</MyLink>
      <MyLink to="/about">About</MyLink>
      <MyLink to="/goodbye" onClick={logOut}>
        Log Out
      </MyLink>
    </SidebarStyled>
  );
};

export default Sidebar;
