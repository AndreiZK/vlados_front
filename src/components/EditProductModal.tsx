import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Product } from "../types";
import React, { useState } from "react";

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

interface EditProductModalProps extends Product {
  open: boolean;
  handleClose: () => void;
}

const EditProductModal = ({
  open,
  handleClose,
  ...product
}: EditProductModalProps) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);
  const [description, setDescription] = useState(product.description);

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
            label="Описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Stack>
        <Button variant="contained">Ввод</Button>
      </Box>
    </Modal>
  );
};

export default EditProductModal;
