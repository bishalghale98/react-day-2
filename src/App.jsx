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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Gallery" element={<Gallery />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Products" element={<ProductsLists />} />
        <Route path="Products/details" element={<ProductDetails />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
