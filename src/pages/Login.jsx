import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import useColorAdminLayout from "../hooks/useColorAdminLayout";

const Login = () => {
  const navigate = useNavigate();

  // CRITICAL: MATCH ORIGINAL
  useColorAdminLayout("app app-full-height app-without-header app-without-sidebar");

  const [email, setEmail] = useState("admin");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const result = login(email, password);
    if (result.success) navigate("/dashboard");
    else setError(result.message);
  };

  return (
    <div id="app" className="app">

      <div className="login login-v1">
        <div className="login-container">

          <div className="login-header">
            <div className="brand">
              <div className="d-flex align-items-center">
                <span className="logo"><ion-icon name="cloud"></ion-icon></span>
                <b className="me-1">Color</b> Admin
              </div>
              <small>Bootstrap 5 Responsive Admin Template</small>
            </div>
            <div className="icon"><i className="fa fa-lock"></i></div>
          </div>

          <div className="login-body">
            <div className="login-content fs-13px">

              {error && <div className="alert alert-danger py-2">{error}</div>}

              <form onSubmit={handleLogin}>

                <div className="form-floating mb-20px">
                  <input
                    type="email"
                    id="emailAddress"
                    className="form-control fs-13px h-45px"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="d-flex align-items-center" htmlFor="emailAddress">
                    Email Address
                  </label>
                </div>

                <div className="form-floating mb-20px">
                  <input
                    type="password"
                    id="password"
                    className="form-control fs-13px h-45px"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="d-flex align-items-center" htmlFor="password">
                    Password
                  </label>
                </div>

                <button className="btn btn-theme h-45px d-block w-100 btn-lg">
                  Sign me in
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Login;
