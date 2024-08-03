import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  function submitForm(data) {
    console.log(data);
  }

  return (
    <form
      action=""
      className="w-1/3 mx-auto"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="py-2">
        <label htmlFor="email" className="ml-1 font-semibold text-sm">
          Email
        </label>
        <input
          type="email"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("email")}
        />
      </div>
      <div className="py-2">
        <label htmlFor="password" className="ml-1 font-semibold text-sm">
          Password
        </label>
        <input
          type="password"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("password")}
        />
      </div>
      <div>
        <button
          type="submit"
          className="mt-5 bg-blue-500 text-white w-full py-2 hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
