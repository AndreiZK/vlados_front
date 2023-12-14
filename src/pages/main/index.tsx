import ProductCard from "../../components/ProductCard";

const productData = [
  {
    name: "Product 1",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    description: "This is a description of product 1",
  },
  {
    name: "Product 2",
    price: 200,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    description: "This is a description of product 2",
  },
];

const MainPage = () => {
  return (
    <div className="main-page">
      {productData.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  );
};

export default MainPage;
