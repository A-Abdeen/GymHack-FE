import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { signout } from "../store/actions/authActions.js";
// Styling
import { NavStyled, NavYard } from "../styles.js";

const NavBar = (props) => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  const hamza = (signout) => {
    dispatch(signout());
    <Redirect to="/" />;
  };
  return (
    <NavStyled sessionName="navbar navbar-expand">
      <div sessionName="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div sessionName="navbar-nav ml-auto">
          {!user ? (
            <>
              <NavYard sessionName="nav-item nav" to="/signin">
                Sign-in
              </NavYard>
              <NavYard sessionName="nav-item nav" to="/signup">
                Signup
              </NavYard>
            </>
          ) : (
            ""
          )}
          {user ? <button onClick={() => hamza(signout)}>SignOut</button> : ""}
        </div>
      </div>
    </NavStyled>
  );
};

export default NavBar;
