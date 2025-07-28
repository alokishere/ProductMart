import axios from "./utils/axios";
import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

const Details = () => {
  const { id } = useParams();

  const [products, setproducts] = useState(null)
  const getSingleProducts = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
  setproducts(data)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getSingleProducts();
  }, []);

  return ( products?
    <div>
      <h1 className="text-center text-2xl font-bold mt-10">Product Details</h1>
      <div className="flex justify-center mt-5">
        <div className="flex items-center justify-center p-5 shadow rounded w-[70%] gap-10">
          <img
            className="w-[40%] h-auto object-contain"
            src={products.image}
            alt={products.title}
          />
          <div className="w-[60%]  flex flex-col">
            <h2 className="text-4xl font-semibold">
              {products.title}
            </h2>
            <h2 className="text-md text-gray-400">{products.category}</h2>
            <p className="mt-2 text-gray-700">
              {products.description}
            </p>
            <p className="mt-3 text-2xl text-red-400 font-bold">${products.price}</p>
            <div className="flex gap-5">
              <Link className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 self-start">
                Edit
              </Link>
              <Link className="mt-5 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 self-start">
                Delete
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>:<Loading/>
  );
};

export default Details;
