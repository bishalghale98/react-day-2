import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="max-w-4xl h-[80vh] md:h-[70vh] rounded-lg md:rounded-[3rem] shadow-md mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-lg md:rounded-l-[3rem] md:rounded-tr-none flex flex-col items-center justify-center p-6">
          <h1 className="text-center text-3xl md:text-5xl font-bold text-white">
            Welcome to Login Page
          </h1>
          <h4 className="text-white text-center text-lg md:text-2xl mt-5">
            Please login to continue.
          </h4>
        </div>

        <div className="md:w-1/2 flex items-center justify-center rounded-b-lg md:rounded-r-[3rem] md:rounded-bl-none bg-white p-6">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
