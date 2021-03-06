import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from './../../utils/utils';
// import { withRouter } from "react-router-dom";
import Header from "./../../Header";
import HeaderLogout from "./../../LogoutHeader";
const PrivateRoute = ({component: Component, ...rest}) => {
    return (
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      <Route
        {...rest}
        render={(props) =>
          isLogin() ? (
            <div>
              <HeaderLogout />
              <Component {...props} />
            </div>
          ) : (
            <div>
              <Header />
              <Redirect to="/login" />
            </div>
          )
        }
      />
    );
};

export default PrivateRoute;