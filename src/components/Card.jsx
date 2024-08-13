/* eslint-disable react-hooks/rules-of-hooks */
import { Link } from "react-router-dom";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { deleteProductById } from "../redux/product/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Modal from "./Modal";
import Spinner from "./Spinner";
import { RxCross2 } from "react-icons/rx";

const card = ({ id, name, category, price, brand = "Default brand" }) => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const dispatch = useDispatch();

  const {
    delete: { loading },
  } = useSelector((state) => state.product);

  function deleteProduct() {
    setShowDeletePopup(true);
    // dispatch(deleteProductById(id));
  }

  function confirmDeleteProduct() {
    dispatch(deleteProductById(id));
  }

  function cancelDeleteProduct() {
    setShowDeletePopup(false);
  }

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10 ">
      <h4 className="text-center text-white font-semibold pt-3 pb-1 ">
        {category}
      </h4>
      <Link to={`${id}`}>
        <img
          className="p-4 rounded-3xl h-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 "
          src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
          alt="product image"
        />
      </Link>
      <div className="px-3 py-1 text-center text-black font-semibold text-xl bg-lime-400 w-max mx-auto rounded-md">
        <h3>{brand}</h3>
      </div>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold text-gray-900 dark:text-white">
          {name}
        </h5>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            4.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <Link
            to={`${id}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Shop Now
          </Link>
        </div>
        <div className="flex justify-around ">
          <button
            className="bg-red-600 flex items-center gap-2  px-5 py-2 rounded-md text-white"
            onClick={deleteProduct}
          >
            Delete <FaTrashAlt />
          </button>
          <Link
            to={`edit/${id}`}
            className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2 rounded-md"
          >
            Edit <FaPencilAlt />
          </Link>
        </div>
      </div>

      <Modal
        isOpen={showDeletePopup}
        setIsOpen={setShowDeletePopup}
        title={<div className="text-red-900 ">Delete Product</div>}
        content={
          <div className="text-left text-red-400">
            Are you sure you want to delete this product?
          </div>
        }
        actions={
          <div className="flex justify-between gap-10">
            <div>
              <button
                className="bg-red-600 px-5 py-2 rounded-md text-white flex items-center gap-2"
                onClick={confirmDeleteProduct}
              >
                Yes {loading ? <Spinner /> : <FaTrashAlt />}
              </button>
            </div>
            <div>
              <button
                className="bg-green-600 px-5 py-2 rounded-md text-white flex items-center gap-2"
                onClick={cancelDeleteProduct}
              >
                No <RxCross2 />
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default card;
