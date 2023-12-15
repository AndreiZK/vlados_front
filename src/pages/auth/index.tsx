import { TextField, Typography, Button } from "@mui/material";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosClient from "../../axiosClient";
import { setUser } from "../../redux/userReducer";
import { useDispatch } from "react-redux";

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { pathname } = useLocation();
  const variant = pathname.split("/").pop();

  const handleLogin = () => {
    axiosClient
      .post("/login", { username, password })
      .then((res) => {
        console.log(res.data);
        dispatch(setUser(res.data));
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleRegister = () => {
    axiosClient
      .post("/register", { username, password })
      .then((res) => {
        console.log(res.data);
        dispatch(setUser(res.data));
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleButtonClick = variant === "login" ? handleLogin : handleRegister;

  return (
    <div className="auth-page">
      <Typography variant="h4" component="h1" gutterBottom margin={0}>
        {variant === "login" ? "Авторизация" : "Регистрация"}
      </Typography>
      <div className="auth-inputs">
        <TextField
          label="Username"
          type="text"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button onClick={handleButtonClick} fullWidth variant="contained">
        Ввод
      </Button>
      {variant === "login" ? (
        <Typography>
          У вас еще нет аккаунта?{" "}
          <a href="/auth/register">Зарегистрируйтесь!</a>
        </Typography>
      ) : (
        <Typography>
          Уже есть аккаунт? <a href="/auth/login">Авторизируйтесь!</a>
        </Typography>
      )}
    </div>
  );
};

export default AuthPage;
