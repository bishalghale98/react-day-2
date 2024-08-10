import axios from "axios";
import config from "../config/config";

const getList = async ({
  filters = {},
  sort = { createdAt: 1 },
  limit = 10,
}) => {
  const query = `limit=${limit}&offset=0&sort=${JSON.stringify(
    sort
  )}&filters=${JSON.stringify(filters)}`;

  const response = await axios.get(`${config.apiurl}/api/products?${query}`);

  return response;
};

const getById = async (id) => {
  const response = await axios.get(`${config.apiurl}/api/products/${id}`, {});

  return response;
};

const getCategories = async () => {
  const response = await axios.get(
    `${config.apiurl}/api/products/categories`,
    {}
  );

  return response;
};

const addProduct = async ({ name, category, brand, price }) => {
  const response = await axios.post(`${config.apiurl}/api/products`, {
    name,
    category,
    brand,
    price,
  });

  return response;
};

export { getList, getById, getCategories, addProduct };
