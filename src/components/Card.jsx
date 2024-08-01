const card = (props) => {
  return (
    <div className="border-solid border-2 border-sky-500 container m-auto  rounded-md text-center  ">
      <div className="flex justify-center">
        <img
          src={props.img}
          alt={props.alt}
          className="size-1/2 align-middle "
        />
      </div>
      <div>
        <h1 className="text-2xl">{props.title}</h1>
        <p className="text-lg">{props.description}</p>
        <p className="font-mono">${props.price}</p>
        <button className="px-5 py-2 bg-slate-800 text-white rounded-md">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default card;
