import Card from "./../../components/Card";

const ProductsLists = () => {
  return (
    <div className="container m-auto">
      <h1>Product List</h1>
      <div className=" grid grid-cols-4">
        <Card
          title="realme 13 Pro 5G (Emerald Green, 512 GB)  (12 GB RAM)"
          description="Meet the Sony LYT-600, a 50MP powerhouse camera that’s a game-changer in smartphone photography."
          price="587"
          img="https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/q/d/x/-original-imah38dbgt2t8jez.jpeg?q=90&crop=false"
        />
      </div>
    </div>
  );
};

export default ProductsLists;
