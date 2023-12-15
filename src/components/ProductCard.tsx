import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Product } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { addProduct, removeProduct } from "../redux/cartReducer";
import { useState } from "react";
import EditProductModal from "./EditProductModal";

const ProductCard = ({ name, price, image, description, id }: Product) => {
  const [editOpen, setEditOpen] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const isInCart = cart.products.find((p) => p.name === name);

  const isAdmin = useSelector((state: RootState) => state.user.isAdmin);

  const handleEdit = () => {
    setEditOpen(true);
  };

  const handleAddToCart = () => {
    dispatch(addProduct({ name, price, image, description, id }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeProduct({ name, price, image, description, id }));
  };

  return (
    <div>
      <Card>
        <CardHeader
          title={name}
          subheader={"$" + price}
          action={
            isAdmin ? (
              <IconButton onClick={handleEdit}>
                <EditIcon />
              </IconButton>
            ) : isInCart ? (
              <IconButton onClick={handleRemoveFromCart}>
                <RemoveShoppingCartIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleAddToCart}>
                <AddShoppingCartIcon />
              </IconButton>
            )
          }
        />
        <CardMedia component="img" height="140" image={image} alt={name} />
        <CardContent sx={{ width: "300px", height: "50px" }}>
          <Typography
            sx={{
              width: "300px",
              height: "50px",
              overflowY: "scroll",
              overflowX: "hidden",
              "&::-webkit-scrollbar": {
                width: "0",
              },
            }}
            variant="body2"
            color="text.secondary"
            component="p"
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
      <EditProductModal
        open={editOpen}
        handleClose={() => setEditOpen(false)}
        {...{ name, price, image, description, id }}
      />
    </div>
  );
};

export default ProductCard;
