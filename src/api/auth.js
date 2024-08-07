import axios from "axios";
import config from "../config/config";

const login = async ({ email, password }) => {
  const response = await axios.post(`${config.apiurl}/api/auth/login`, {
    email,
    password,
  });
  return response;
};

async function signUp({ name, email, password, confirmPassword }) {
  const response = await axios.post(`${config.apiurl}/api/auth/register`, {
    name,
    email,
    password,
    confirmPassword,
  });
  return response;
}

export { login, signUp };
