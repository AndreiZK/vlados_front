import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../types";
import axiosClient from "../../axiosClient";
import { Button, TextField } from "@mui/material";
import AddNewProductModal from "../../components/AddNewProductModal";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

const MainPage = () => {
  const user = useSelector((state: RootState) => state.user);

  const [products, setProducts] = useState<Product[]>([]);
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);

  const [search, setSearch] = useState("");
  const [addProductOpen, setAddProductOpen] = useState(false);

  useEffect(() => {
    axiosClient
      .get("/products")
      .then((res) => {
        setProducts(res.data);
        setProductsToShow(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (search.length === 0) setProductsToShow(products);
    else
      setProductsToShow(
        products.filter((p) =>
          p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      );
  }, [search, products]);

  return (
    <div>
      <div className="main-page-top">
        <TextField
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          label="Поиск по названию товара"
          variant="outlined"
        />
        {user.isAdmin && (
          <Button variant="contained" onClick={() => setAddProductOpen(true)}>
            Добавить новый товар
          </Button>
        )}
      </div>
      <div className="main-page-products">
        {productsToShow.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
      <AddNewProductModal
        open={addProductOpen}
        handleClose={() => setAddProductOpen(false)}
      />
    </div>
  );
};

export default MainPage;
