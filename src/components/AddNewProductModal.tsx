import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import axiosClient from "../axiosClient";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

interface AddNewProductModalProps {
  open: boolean;
  handleClose: () => void;
}

const AddNewProductModal = ({ open, handleClose }: AddNewProductModalProps) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleAddProduct = () => {
    axiosClient
      .post("/products", {
        name,
        price,
        image,
        description,
      })
      .then((res) => {
        console.log(res.data);
        handleClose();
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Редактировать товар
        </Typography>
        <Stack gap="1em" marginBlock="1.5em">
          <TextField
            label="Название"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Цена"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <TextField
            label="Картинка (URL)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <TextField
            label="Описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Stack>
        <Button onClick={handleAddProduct} variant="contained">
          Ввод
        </Button>
      </Box>
    </Modal>
  );
};

export default AddNewProductModal;
