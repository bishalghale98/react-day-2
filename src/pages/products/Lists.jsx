import { useDispatch, useSelector } from "react-redux";
import Card from "./../../components/Card";
import { useEffect } from "react";
import { getProductList } from "../../redux/product/productActions";
import { toast, ToastContainer } from "react-toastify";

const ProductsLists = () => {
  const { loading, error, products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 2000 });
    }
  }, [error]);

  if (products) {
  }

  return (
    <div className="container m-auto">
      <h1 className="text-6xl font-semibold ">Product List</h1>
      <div className=" grid grid-cols-4 gap-5">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.name}
            brand={product.brand}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductsLists;
