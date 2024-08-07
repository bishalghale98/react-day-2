import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCounter,
  increaseCounter,
  resetCounter,
} from "../redux/counter/counterSlice";

const About = () => {
  const { count } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  function increaseCountValue() {
    dispatch(increaseCounter());
  }
  function decreaseCountValue() {
    dispatch(decreaseCounter());
  }
  function resetCountValue() {
    dispatch(resetCounter());
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-6xl">About</h1>
      <h3 className="text-2xl text-center">{count}</h3>
      <div className="container mx-auto flex justify-center items-center gap-3">
        <button
          className="bg-blue-500 text-white px-5 py-3 rounded"
          onClick={increaseCountValue}
        >
          +
        </button>
        <button
          className="bg-blue-500 text-white px-5 py-3 rounded"
          onClick={decreaseCountValue}
        >
          -
        </button>
        <button
          className="bg-blue-500 text-white px-5 py-3 rounded"
          onClick={resetCountValue}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default About;
