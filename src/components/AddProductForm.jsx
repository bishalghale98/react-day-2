import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct, updateProduct } from "../redux/product/productActions";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { MdModeEdit } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AddProductForm = ({ product }) => {
  const {
    add: { loading: addPending, success: addSuccess },
    edit: { loading: editPending, success: editSuccess },
  } = useSelector((state) => state.product);

  const isLoading = addPending || editPending;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: product });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function submitForm(data) {
    if (product) {
      dispatch(updateProduct(data));
    } else {
      dispatch(addNewProduct(data));
    }
  }

  useEffect(() => {
    if (addSuccess) {
      reset();
    }
    if (editSuccess) {
      navigate("/products");
      toast.success("Product updated successfully", {
        autoClose: 1000,
        onClose: () => {},
      });
    }
  }, [reset, addSuccess, editSuccess, navigate]);

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="py-1">
        <label htmlFor="name" className="ml-1 font-semibold text-sm">
          Title:
        </label>
        <input
          type="text"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("name", {
            required: "Product name is required",
          })}
        />
        <p className="text-red-700 text-sm my-1">{errors.name?.message}</p>
      </div>
      {/*  // category */}
      <div className="py-1">
        <label htmlFor="category" className="ml-1 font-semibold text-sm">
          Category:
        </label>
        <input
          type="text"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("category", {
            required: "category is required",
          })}
        />
        <p className="text-red-700 text-sm my-1">{errors.category?.message}</p>
      </div>

      {/* brand */}
      <div className="py-1">
        <label htmlFor="brand" className="ml-1 font-semibold text-sm">
          Brand:
        </label>
        <input
          type="text"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("brand", {
            required: "brand is required",
          })}
        />
        <p className="text-red-700 text-sm my-1">{errors.brand?.message}</p>
      </div>

      {/* price */}

      <div className="py-1">
        <label htmlFor="price" className="ml-1 font-semibold text-sm">
          Price:
        </label>
        <input
          type="number"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("price", {
            required: "price is required",
          })}
        />
        <p className="text-red-700 text-sm my-1">{errors.name?.message}</p>
      </div>
      <button
        className={`${
          product
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-green-500 hover:bg-green-600"
        } font-semibold text-white px-5 py-2 w-full mt-5 rounded-lg flex items-center justify-center item gap-2`}
      >
        <span>{product ? `Edit Product` : `Add Product`}</span>
        {isLoading ? (
          <Spinner height="h-6" width="6" />
        ) : product ? (
          <MdModeEdit />
        ) : (
          "+"
        )}
      </button>
      <ToastContainer />
    </form>
  );
};

export default AddProductForm;
