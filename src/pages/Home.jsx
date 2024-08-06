import { useSelector } from "react-redux";

const Home = () => {
  const { count } = useSelector((state) => state.counter);
  return (
    <div>
      <h3 className="text-2xl text-center">{count}</h3>
    </div>
  );
};

export default Home;
