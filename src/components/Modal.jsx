/* eslint-disable react/prop-types */
import { RxCross2 } from "react-icons/rx";

const Modal = ({ isOpen = false, setIsOpen, title, content, actions }) => {
  return (
    <div className={isOpen ? "block" : "hidden"}>
      <div className="h-svh w-full bg-gray-100 fixed top-0 bottom-0 left-0 right-0 bg-opacity-50 flex items-center justify-center">
        <div className=" md:w-1/2 lg:w-1/3 min-h-20 px-10 py-4 bg-white shadow-md rounded-md">
          {/* modal title */}
          <div className="flex justify-between">
            <h1 className="font-bold text-3xl">{title}</h1>
            <button onClick={() => setIsOpen(false)}>
              <RxCross2 />
            </button>
          </div>

          {/* modal content */}
          <div className="py-6">{content}</div>
          <div className="flex flex-row-reverse justify-between">{actions}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
