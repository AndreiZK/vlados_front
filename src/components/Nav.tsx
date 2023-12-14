import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { IconButton } from "@mui/material";

const pathToTextMap = {
  "/": "Каталог продуктов",
  "/admin": "Панель администратора",
  "/auth/login": "Авторизация",
  "/auth/register": "Регистрация",
};

const Nav = () => {
  const { pathname } = useLocation();
  const currentUser = useSelector((state: RootState) => state.user);

  const cart = useSelector((state: RootState) => state.cart);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {pathname in pathToTextMap && pathToTextMap[pathname]}
          </Typography>
          {currentUser.isAuthenticated && !currentUser.isAdmin && (
            <Box display="flex" marginRight="2em">
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                $
                {(cart.products.length > 0 &&
                  cart.products.reduce((acc, i) => acc + i.price, 0)) ||
                  0}
              </Typography>
              <IconButton>
                <ShoppingCartIcon />
              </IconButton>
            </Box>
          )}
          {!currentUser.isAuthenticated ? (
            <Button color="inherit">Войти</Button>
          ) : (
            <Button color="inherit">Выйти</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
