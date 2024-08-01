const NotFound = () => {
  return (
    <div className="container m-auto flex flex-col justify-center text-center items-center pt-24">
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg"
        alt="404 Not Found"
        className=" h-4/5"
      />
      <h1 className="text-3xl text-slate-500 font-bold">404 Not Found</h1>
      <h1 className="text-4xl font-bold">Whoops! That page doesn`t exist.</h1>
    </div>
  );
};

export default NotFound;
