import { signUp } from "../store/actions/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { useState } from "react";

import PasswordMask from "react-password-mask";

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    dispatch(signUp(user, history));
  };

  return (
    <form sessionName="container" onSubmit={handleSubmit}>
      <h1> Sign Up</h1>
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

      {/* <div sessionName="mb-3">
        <label sessionName="form-label">password</label>
        <input
          type="password"
          value={user.password}
          onChange={handleChange}
          name="password"
          sessionName="form-control"
        />
      </div> */}

      <div sessionName="mb-3">
        <label sessionName="form-label">Email</label>
        <input
          type="email"
          value={user.email}
          onChange={handleChange}
          name="email"
          sessionName="form-control"
        />
      </div>

      <button type="submit" sessionName="btn btn-info float-right">
        signup
      </button>
    </form>
  );
};

export default SignUp;
