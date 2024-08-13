import { useParams } from "react-router-dom";
import AddProductForm from "../../components/AddProductForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/product/productActions";
import Spinner from "../../components/Spinner";

const EditProduct = () => {
  const params = useParams();

  const { loading, error, products } = useSelector((state) => state.product);

  console.log(loading, error, products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(params?.id));
  }, [params, dispatch]);

  return (
    <div className="py-16">
      <div className="bg-gray-150 min-h-fit mx-h[100vh]">
        <div className="container mx-auto ">
          <h1 className="text-5xl font-bold text-center mb-10">Edit Product</h1>

          {loading ? (
            <div className="flex items-center justify-center w-full h-[80vh]">
              <Spinner height="h-20" width="w-20" />
            </div>
          ) : (
            <AddProductForm product={products[0]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
