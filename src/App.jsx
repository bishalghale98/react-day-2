import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";
import ProductsLists from "./pages/products/Lists";
import ProductDetails from "./pages/products/Details";
import NotFound from "./pages/NotFound";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import "react-toastify/dist/ReactToastify.css";
import AuthLayout from "./layouts/AuthLayout";
import UnAuthLayout from "./layouts/UnAuthLayout";
import { useSelector } from "react-redux";
import EditProduct from "./pages/products/Edit";

const App = () => {
  const { user } = useSelector((state) => state.auth);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route element={<AuthLayout user={user} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="products">
            <Route index element={<ProductsLists />} />
            <Route path=":id" element={<ProductDetails />} />
            <Route path="edit/:id" element={<EditProduct />} />
          </Route>
        </Route>

        <Route path="Auth" element={<UnAuthLayout user={user} />}>
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
