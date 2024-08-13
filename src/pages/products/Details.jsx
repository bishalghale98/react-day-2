import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../redux/product/productActions";
import Spinner from "../../components/Spinner";

const ProductDetails = () => {
  const params = useParams();

  const { loading, products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(getProductById(params.id));
  }, [dispatch, params.id]);

  if (loading)
    return (
      <div className="flex items-center justify-center w-full h-[80vh]">
        <Spinner height="h-20" width="w-20" />
      </div>
    );

  return (
    <div className="bg-gray-400">
      <h1 className="container mx-auto pt-16 font-bold text-5xl">
        Products Details
      </h1>
      <div className=" container mx-auto h-fit lg:h-[90vh] flex flex-col lg:flex-row justify-evenly items-center py-10 gap-4 m-[-10em]">
        <div>
          <div className="flex gap-7">
            <p className="text-center text-white bg-orange-600 font-semibold w-max rounded py-2 px-5 mb-3">
              {products[0]?.category}
            </p>
            <p className="text-center text-white bg-orange-600 font-semibold w-max rounded py-2 px-5 mb-3">
              {products[0]?.brand}
            </p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
              className="max-w-sm md:max-w-xl  rounded-lg shadow-2xl   relative z-0  transition-all duration-300 hover:scale-110"
            />
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold">{products[0]?.name}</h1>

          {/* product descriptions */}
          <p className="text-lg md:py-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            blanditiis fuga, mollitia iusto ab accusantium aperiam, repudiandae,
            vel eveniet consequatur illo dolorum? Sequi earum doloribus voluptas
            illum facere ut hic reiciendis ullam minima id saepe at ipsam quasi,
            eligendi quaerat!
          </p>
          <p className="my-4 px-3 py-2 rounded-md text-white bg-blue-900 w-max ">
            Price: ${products[0]?.price}
          </p>
          <button className="btn btn-primary bg-blue-700 hover:bg-blue-800 rounded-lg py-2 px-5 items-end text-white mt-9">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
