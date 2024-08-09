import { useDispatch, useSelector } from "react-redux";
import Card from "./../../components/Card";
import { useEffect } from "react";
import {
  getProductByCategories,
  getProductList,
} from "../../redux/product/productActions";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "./../../components/Spinner";
import ProductsFilter from "../../components/ProductsFilter";

const ProductsLists = () => {
  const { loading, error, products, query } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList(query));
    dispatch(getProductByCategories());
  }, [dispatch, query]);

  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 2000 });
    }
  }, [error]);

  return (
    <div className="container m-auto">
      <h1 className="text-6xl font-semibold ">Product List</h1>
      <ProductsFilter />
      {loading ? (
        <div className="flex items-center justify-center w-full h-[80vh]">
          <Spinner height="h-20" width="w-20" />
        </div>
      ) : (
        <div className=" container mx-auto py-10 grid items-center justify-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4  ">
          {products.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default ProductsLists;
