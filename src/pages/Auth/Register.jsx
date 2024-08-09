import RegisterForm from "../../components/RegisterForm";

const Register = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-4xl h-[80vh] md:h-[70vh] rounded-lg md:rounded-[3rem] shadow-md mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full bg-gradient-to-r from-pink-400 to-red-500 rounded-t-lg md:rounded-l-[3rem] md:rounded-tr-none flex flex-col items-center justify-center p-6">
          <h1 className="text-center text-3xl md:text-5xl font-bold text-white">
            Welcome to Register Page
          </h1>
          <h4 className="text-white text-center text-lg md:text-2xl mt-5">
            Please Register to continue.
          </h4>
        </div>

        <div className="md:w-1/2 w-full flex items-center justify-center rounded-b-lg md:rounded-r-[3rem] md:rounded-bl-none bg-white p-6">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
