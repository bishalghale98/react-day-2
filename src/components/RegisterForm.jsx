import { useForm } from "react-hook-form";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../constants/regex";
import { signUp } from "../api/auth";
import { toast, ToastContainer } from "react-toastify";

const RegisterForm = () => {
  const { register, handleSubmit, formState, watch } = useForm({ mode: "all" });

  const password = watch("password");

  const { errors } = formState;

  async function submitForm(data) {
    try {
      await signUp(data);

      toast.success("user successfully registered");
    } catch (error) {
      toast.error(error.response.data);
    }
  }

  return (
    <form
      action=""
      onSubmit={handleSubmit(submitForm)}
      noValidate
      className="w-4/6"
    >
      <div className="py-1">
        <label htmlFor="name" className="ml-1 font-semibold text-sm">
          Name
        </label>
        <input
          type="name"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("name", {
            required: "Name is required",
          })}
        />
        <p className="text-red-700 text-sm my-1">{errors.name?.message}</p>
      </div>

      <div className="py-2">
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
      <div className="py-2">
        <label htmlFor="confirmPassword" className="ml-1 font-semibold text-sm">
          Confirm Password
        </label>
        <input
          type="password"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("confirmPassword", {
            required: "confirmPassword is required",
            validate: (value) => {
              return value == password || "Passwords do not match.";
            },
          })}
        />
        <p className="text-red-700 text-sm my-1">
          {errors.confirmPassword?.message}
        </p>
      </div>
      <div>
        <button
          type="submit"
          className="mt-5 bg-pink-500 text-white w-full py-2 hover:bg-pink-600"
        >
          Register
        </button>
      </div>
      <div className="text-center mt-5 text-sm text-gray-600">
        <span>
          Already have an account? <a href="/auth/Login">Sign in</a>
        </span>
      </div>
      <ToastContainer />
    </form>
  );
};

export default RegisterForm;
