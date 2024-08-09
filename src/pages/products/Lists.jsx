import { useDispatch, useSelector } from "react-redux";
import Card from "./../../components/Card";
import { useEffect } from "react";
import { getProductList } from "../../redux/product/productActions";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "./../../components/Spinner";

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

  if (loading)
    return (
      <div className="flex items-center justify-center w-full h-[80vh]">
        <Spinner size={64} />
      </div>
    );

  return (
    <div className="container m-auto">
      <h1 className="text-6xl font-semibold ">Product List</h1>
      <div className=" container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center">
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
