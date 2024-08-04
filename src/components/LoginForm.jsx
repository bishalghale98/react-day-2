import { useForm } from "react-hook-form";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../constants/regex";
import { login } from "../api/auth";

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm({ mode: "all" });

  const { errors } = formState;

  async function submitForm(data) {
    await login(data);
  }

  return (
    <form
      action=""
      onSubmit={handleSubmit(submitForm)}
      noValidate
      className="w-4/6"
    >
      <div className="py-1">
        <label htmlFor="email" className="ml-1 font-semibold text-sm">
          Email
        </label>
        <input
          type="email"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Invalid email format",
            },
          })}
        />
        <p className="text-red-700 text-sm my-1">{errors.email?.message}</p>
      </div>
      <div className="py-2">
        <label htmlFor="password" className="ml-1 font-semibold text-sm">
          Password
        </label>
        <input
          type="password"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: PASSWORD_REGEX,
              message:
                "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
            },
            minLength: {
              value: 6,
              message:
                "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
            },
          })}
        />
        <p className="text-red-700 text-sm my-1">{errors.password?.message}</p>
      </div>
      <div>
        <button
          type="submit"
          className="mt-5 bg-blue-500 text-white w-full py-2 hover:bg-blue-600"
        >
          Login
        </button>
      </div>
      <div className="text-center text-sm mt-5 text-gray-600">
        <span>
          Do not have an account? <a href="/auth/Register">Create Account</a>
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
