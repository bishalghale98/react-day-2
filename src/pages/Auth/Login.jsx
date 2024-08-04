import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <div className="container mx-auto">
      <div className="w-3/5 h-[70vh] rounded-[3rem] shadow-md mx-auto flex">
        <div className="w-1/2 bg-gradient-to-r from-cyan-500  to-blue-500 rounded-l-[3rem] flex flex-col items-center justify-center">
          <h1 className="text-center text-5xl font-bold text-white">
            Welcome to login Page
          </h1>
          <h4 className="text-white text-center text-2xl mt-5">
            Please login to continue.
          </h4>
        </div>

        <div className="w-1/2 flex items-center justify-center ">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
