import axios from "axios";
import config from "../config/config";

const getList = async () => {
  const response = await axios.get(`${config.apiurl}/api/products`, {});

  return response;
};

export { getList };
