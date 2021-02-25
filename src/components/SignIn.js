import { signIn } from "../store/actions/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PasswordMask from "react-password-mask";
import React from "react";
import Slide from "@material-ui/core/Slide";
import { UpdateButtonStyle } from "../styles";

import { useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signIn(user, history));
  };
  return (
    <form sessionName="container" onSubmit={handleSubmit}>
      <h1> Sign In</h1>
      <div sessionName="mb-3">
        <label sessionName="form-label">username</label>
        <input
          type="text"
          value={user.username}
          onChange={handleChange}
          name="username"
          sessionName="form-control"
        />
      </div>

      <PasswordMask
        name="password"
        placeholder="Enter password"
        value={user.password}
        onChange={handleChange}
      />

      <div>
        <UpdateButtonStyle className="btn float-right" type="submit">
          Sign in
        </UpdateButtonStyle>
      </div>
    </form>
  );
};

export default SignIn;
