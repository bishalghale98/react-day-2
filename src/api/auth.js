import axios from "axios";

const login = async ({ email, password }) => {
  const response = await axios.post(
    "https://nodejs-20240519.vercel.app/api/auth/login",
    {
      email,
      password,
    }
  );
  return response;
};

async function signUp(name, email, password, confirmPassword) {
  const response = await axios.post(
    "https://nodejs-20240519.vercel.app/api/auth/Register",
    {
      name,
      email,
      password,
      confirmPassword,
    }
  );
  return response;
}

export { login, signUp };
