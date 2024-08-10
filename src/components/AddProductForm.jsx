import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../redux/product/productActions";

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  function submitForm(data) {
    dispatch(addNewProduct(data));
  }

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
      <button className="font-semibold bg-green-500 text-white px-5 py-2 w-full mt-5 rounded-lg">
        Add Product +
      </button>
    </form>
  );
};

export default AddProductForm;
