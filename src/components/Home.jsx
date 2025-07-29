import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductsContext } from "./utils/Context";
import Loading from "./Loading";
import axios from "./utils/axios";
import { get, set } from "react-hook-form";

const Home = () => {
  const [products, setProducts] = useContext(ProductsContext);

const {search} = useLocation()
const query = new URLSearchParams(search)
const category = query.get('category')
const [filteredProducts, setfilteredProducts] = useState(null)
const getProductsCategory = async () => {
  try {
    const {data} = await axios(`products/category/${category}`)
    setfilteredProducts(data)
  } catch (error) {
    console.log(error);
  }
}
// console.log(filteredProducts);
useEffect(() => {
  if(!filteredProducts || category == null) setfilteredProducts(products)
 if(category != null) getProductsCategory()
}, [category,products])


  return products ? (
    <div className="flex">
      <Nav />
      <div className=" w-[85%] h-screen p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
    
        {filteredProducts && filteredProducts.map((p, i) => {
         return <Link
         key={p.id}
            to={`/details/${p.id}`}
            className="mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex-col flex
          justify-center items-center"
          >
            <div
              className="hover:scale-105 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  `url(${p.image})`,
              }}
            ></div>
            <h1 className="hover: text-blue-300">
           {p.title}
            </h1>
          </Link>;
        })}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
