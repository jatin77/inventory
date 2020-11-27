import React from "react";
import ProductList from "../../components/productList";
import QueryBar from "../../components/queryBar";

const Home = () => {
  return (
    <>
      {/* Search, Filter & Add Product Bar */}
      <QueryBar />

      {/* Products List */}
      <div className="mt-5">
        <ProductList />
      </div>
    </>
  );
};

export default Home;
