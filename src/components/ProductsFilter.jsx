import { useDispatch, useSelector } from "react-redux";
import { setFilters, setLimit, setSort } from "../redux/product/productSlice";

const ProductsFilter = () => {
  const { query, categories } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  function setProductsLimit(limit) {
    dispatch(setLimit(parseInt(limit)));
  }

  function sortProducts(sort) {
    dispatch(setSort(JSON.parse(sort)));
  }

  function filterProductByName(value) {
    dispatch(setFilters({ name: value }));
  }

  function filterProductByCategory(value) {
    dispatch(setFilters(value ? { category: value } : {}));
  }

  return (
    <div className="border py-5 px-4 mt-5">
      <div className="flex flex-col md:flex-row md:justify-around gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border p-2 rounded"
            value={query?.filters?.name}
            onChange={(e) => filterProductByName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category" className="mb-1">
            Category
          </label>
          <select
            name="sort"
            id="sort"
            className="border size-fit p-2 rounded"
            value={JSON.stringify(query?.category)}
            onChange={(e) => filterProductByCategory(e.target.value)}
          >
            <option value="">Select Categroy</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="sort" className="mb-1">
            Sort:
          </label>
          <select
            name="sort"
            id="sort"
            className="border size-fit p-2 rounded"
            value={JSON.stringify(query?.sort)}
            onChange={(e) => sortProducts(e.target.value)}
          >
            <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
            <option value={JSON.stringify({ price: 1 })}>
              Price: Low to High
            </option>
            <option value={JSON.stringify({ price: -1 })}>
              Price: High to Low
            </option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="limit" className="mb-1">
            Limit:
          </label>
          <select
            name="limit"
            id="Limit"
            className="border size-fit md:size-fit p-2 rounded"
            value={query?.limit ?? 10}
            onChange={(e) => setProductsLimit(e.target.value)}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductsFilter;
